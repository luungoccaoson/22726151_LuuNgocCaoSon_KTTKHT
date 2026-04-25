const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "payment-service",
  brokers: ["172.16.56.245:29092"],
});

const consumer = kafka.consumer({ groupId: "payment-group" });
const producer = kafka.producer();

module.exports = { kafka, consumer, producer };
