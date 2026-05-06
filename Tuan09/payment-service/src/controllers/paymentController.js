const paymentService = require("../services/paymentService");

exports.processPayment = async (req, res) => {
  try {
    const result = await paymentService.processPayment(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Payment error" });
  }
};