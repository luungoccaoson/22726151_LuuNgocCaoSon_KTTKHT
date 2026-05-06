const express = require("express");
const cors = require("cors");

const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/payments", paymentRoutes);

const PORT = 8084;
const sequelize = require("./config/database");

sequelize.sync().then(() => {
  console.log("Payment DB connected");
});

app.listen(PORT, () => {
  console.log(`Payment Service running on port ${PORT}`);
});