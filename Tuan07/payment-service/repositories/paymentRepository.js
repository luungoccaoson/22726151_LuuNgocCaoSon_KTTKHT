const payments = [];

const savePayment = async (data) => {
  const record = {
    id: Date.now(),
    ...data,
    createdAt: new Date(),
  };

  payments.push(record);

  console.log("💾 Saved payment:", record);
};

module.exports = { savePayment };