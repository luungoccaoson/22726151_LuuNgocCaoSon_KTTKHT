const bookingService = require("../services/bookingService");

exports.createBooking = async (req, res) => {
  try {
    const data = req.body;

    const result = await bookingService.createBooking(data);

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Booking failed" });
  }
};