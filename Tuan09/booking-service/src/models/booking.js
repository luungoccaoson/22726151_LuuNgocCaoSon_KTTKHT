const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Booking = sequelize.define("Booking", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  userId: DataTypes.STRING,
  tourId: DataTypes.STRING,
  status: DataTypes.STRING
});

module.exports = Booking;