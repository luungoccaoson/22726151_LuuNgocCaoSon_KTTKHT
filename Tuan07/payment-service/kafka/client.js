const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "payment-service",
  brokers: ["172.16.56.245:29092"]
});

module.exports = kafka;