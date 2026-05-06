const Payment = require("../models/payment");

exports.processPayment = async (data) => {
  const success = Math.random() > 0.3;

  const payment = await Payment.create({
    bookingId: data.bookingId,
    status: success ? "SUCCESS" : "FAILED"
  });

  return payment;
};