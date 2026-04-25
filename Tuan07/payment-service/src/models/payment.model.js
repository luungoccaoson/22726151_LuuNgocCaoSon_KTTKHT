const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  bookingId: String,
  status: String,
  amount: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Payment", paymentSchema);
