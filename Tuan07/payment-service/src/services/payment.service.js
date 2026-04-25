const Payment = require("../models/payment.model");

const processPayment = async (booking) => {
  const success = Math.random() > 0.3;

  const payment = await Payment.create({
    bookingId: booking.id,
    status: success ? "SUCCESS" : "FAILED",
    amount: booking.amount || 100,
  });

  return { success, payment };
};

module.exports = { processPayment };
