const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Booking = sequelize.define("Booking", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  user_id: DataTypes.STRING,
  tour_id: DataTypes.STRING,
  status: DataTypes.STRING
});

module.exports = Booking;