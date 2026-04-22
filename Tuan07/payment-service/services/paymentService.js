const { sendMessage } = require("../producers/producer");
const PaymentSuccess = require("../events/paymentSuccess");
const PaymentFailed = require("../events/paymentFailed");
const { savePayment } = require("../repositories/paymentRepository");

const processPayment = async (booking) => {
  console.log("💰 Processing payment for booking:", booking.bookingId);

  const success = Math.random() > 0.5;

  if (success) {
    const event = new PaymentSuccess(booking.bookingId);

    await sendMessage("payment-completed", event);

    await savePayment({
      bookingId: booking.bookingId,
      status: "SUCCESS",
    });

    console.log("✅ PAYMENT SUCCESS:", booking.bookingId);
  } else {
    const event = new PaymentFailed(
      booking.bookingId,
      "Random payment failure"
    );

    await sendMessage("booking-failed", event);

    await savePayment({
      bookingId: booking.bookingId,
      status: "FAILED",
    });

    console.log("❌ PAYMENT FAILED:", booking.bookingId);
  }
};

module.exports = { processPayment };