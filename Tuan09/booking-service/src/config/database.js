const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("booking_db", "booking_user", "123456", {
  host: "172.16.32.90",
  dialect: "mariadb"
});

module.exports = sequelize;