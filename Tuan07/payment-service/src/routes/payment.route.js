const express = require("express");
const router = express.Router();

const {
  getAllPayments,
  getPaymentByBooking,
  testBookingEvent,
} = require("../controllers/payment.controller");

router.get("/", getAllPayments);
router.get("/:bookingId", getPaymentByBooking);
router.post("/test", testBookingEvent);

module.exports = router;
