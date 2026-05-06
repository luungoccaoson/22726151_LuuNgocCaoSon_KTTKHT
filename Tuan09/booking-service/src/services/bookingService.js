const { v4: uuidv4 } = require("uuid");
const Booking = require("../models/booking");

exports.createBooking = async (data) => {
  const booking = await Booking.create({
    id: uuidv4(),
    user_id: data.user_id,
    tour_id: data.tour_id,
    status: "CREATED"
  });

  return booking;
};