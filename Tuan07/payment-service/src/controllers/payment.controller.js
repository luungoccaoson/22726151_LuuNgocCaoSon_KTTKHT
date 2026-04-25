const Payment = require("../models/payment.model");
const { sendEvent } = require("../producers/payment.producer");

// GET /payments
const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find().sort({ createdAt: -1 });
    res.json(payments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /payments/:bookingId
const getPaymentByBooking = async (req, res) => {
  try {
    const payment = await Payment.findOne({
      bookingId: req.params.bookingId,
    });

    if (!payment) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json(payment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /payments/test
const testBookingEvent = async (req, res) => {
  try {
    const booking = {
      id: req.body.id || "test123",
      amount: req.body.amount || 100,
    };

    await sendEvent("BOOKING_CREATED", booking);

    res.json({
      message: "Fake BOOKING_CREATED sent",
      booking,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllPayments,
  getPaymentByBooking,
  testBookingEvent,
};
