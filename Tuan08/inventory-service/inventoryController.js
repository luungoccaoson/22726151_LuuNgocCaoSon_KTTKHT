const redisClient = require('./redisClient');

// Xem tồn kho
exports.getStock = async (req, res) => {
    try {
        const { productId } = req.params;
        
        // Thử tìm theo key 'stock:id' hoặc 'id'
        let stock = await redisClient.get(`stock:${productId}`) || await redisClient.get(productId);

        // Nếu không thấy, thử tìm trong object product
        if (stock === null) {
            const productData = await redisClient.get(`product:${productId}`);
            if (productData) {
                const p = JSON.parse(productData);
                stock = p.stock || p.Stock || p.inventory;
            }
        }

        if (stock === null) {
            return res.status(404).json({ success: false, message: "Hàng không có trong kho" });
        }

        res.json({
            productId: productId,
            stock: parseInt(stock)
        });
    } catch (error) {
        res.status(500).json({ error: "Lỗi Server nội bộ" });
    }
};

// Giảm tồn kho (Dùng cho Checkout)
exports.decreaseStock = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const q = parseInt(quantity);

        const key1 = `stock:${productId}`;
        const key2 = productId;
        
        let activeKey = null;
        let currentStock = await redisClient.get(key1);
        
        if (currentStock !== null) {
            activeKey = key1;
        } else {
            currentStock = await redisClient.get(key2);
            if (currentStock !== null) activeKey = key2;
        }

        if (!activeKey) {
            return res.status(404).json({ success: false, message: "Sản phẩm không tồn tại" });
        }

        if (parseInt(currentStock) < q) {
            return res.status(400).json({ success: false, message: "Số lượng tồn kho không đủ" });
        }

        // Thực hiện trừ kho Atomic
        const newStock = await redisClient.decrBy(activeKey, q);
        
        // Rollback nếu bị âm (Race condition)
        if (newStock < 0) {
            await redisClient.incrBy(activeKey, q);
            return res.status(400).json({ success: false, message: "Hết hàng" });
        }

        res.json({ 
            success: true, 
            productId, 
            remainingStock: newStock 
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};