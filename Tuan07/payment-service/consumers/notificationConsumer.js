const kafka = require("../kafka/client");
const {
  notifySuccess,
  notifyFailed,
} = require("../services/notificationService");

const consumer = kafka.consumer({ groupId: "notification-group" });

const run = async () => {
  await consumer.connect();

  await consumer.subscribe({ topic: "payment-completed" });
  await consumer.subscribe({ topic: "booking-failed" });

  console.log("📥 Notification Consumer running...");

  await consumer.run({
    eachMessage: async ({ topic, message }) => {
      const data = JSON.parse(message.value.toString());

      if (topic === "payment-completed") {
        notifySuccess(data);
      }

      if (topic === "booking-failed") {
        notifyFailed(data);
      }
    },
  });
};

module.exports = run;