const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("payment_db", "payment_user", "123456", {
  host: "172.16.32.90",
  dialect: "mariadb"
});

module.exports = sequelize;