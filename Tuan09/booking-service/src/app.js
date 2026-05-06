const express = require("express");
const cors = require("cors");

const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/bookings", bookingRoutes);

const PORT = 8083;
const sequelize = require("./config/database");

sequelize.sync().then(() => {
  console.log("DB connected");
});

app.listen(PORT, () => {
  console.log(`Booking Service running on port ${PORT}`);
});