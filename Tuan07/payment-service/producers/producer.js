const kafka = require("../kafka/client");

const producer = kafka.producer();

const connectProducer = async () => {
  await producer.connect();
  console.log("📤 Producer connected");
};

const sendMessage = async (topic, message) => {
  await producer.send({
    topic,
    messages: [
      {
        value: JSON.stringify(message),
      },
    ],
  });
};

module.exports = {
  connectProducer,
  sendMessage,
};