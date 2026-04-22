const runBookingConsumer = require("./consumers/bookingConsumer");
const runNotificationConsumer = require("./consumers/notificationConsumer");
const { connectProducer } = require("./producers/producer");

const start = async () => {
  try {
    await connectProducer();

    runBookingConsumer();
    runNotificationConsumer();

    console.log("🚀 Payment + Notification Service STARTED");
  } catch (err) {
    console.error("❌ Error starting service:", err);
  }
};

start();