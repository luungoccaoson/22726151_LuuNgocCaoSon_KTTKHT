const kafka = require("../kafka/client");
const { processPayment } = require("../services/paymentService");

const consumer = kafka.consumer({ groupId: "payment-group" });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({
    topic: "booking-created",
    fromBeginning: true,
  });

  console.log("📥 Booking Consumer running...");

  await consumer.run({
    eachMessage: async ({ message }) => {
      const booking = JSON.parse(message.value.toString());

      console.log("📩 BOOKING RECEIVED:", booking);

      await processPayment(booking);
    },
  });
};

module.exports = run;