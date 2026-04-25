require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const { producer } = require("./config/kafka");
const runConsumer = require("./consumers/booking.consumer");

const app = express();

(async () => {
  await connectDB();
  await producer.connect();
  await runConsumer();

  app.listen(8084, () => {
    console.log("Payment Service running on port 8084");
  });
})();
