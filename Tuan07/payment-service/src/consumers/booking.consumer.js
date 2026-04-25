const { consumer } = require("../config/kafka");
const { processPayment } = require("../services/payment.service");
const { sendEvent } = require("../producers/payment.producer");

const runConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "BOOKING_CREATED" });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const booking = JSON.parse(message.value.toString());

      console.log("📥 Received BOOKING_CREATED:", booking);

      const { success, payment } = await processPayment(booking);

      if (success) {
        await sendEvent("PAYMENT_COMPLETED", {
          bookingId: booking.id,
        });
      } else {
        await sendEvent("BOOKING_FAILED", {
          bookingId: booking.id,
        });
      }
    },
  });
};

module.exports = runConsumer;
