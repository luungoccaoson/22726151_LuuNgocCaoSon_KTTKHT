const { v4: uuidv4 } = require("uuid");
const Booking = require("../models/booking");

exports.createBooking = async (data) => {
  const booking = await Booking.create({
    id: uuidv4(),
    userId: data.userId,
    tourId: data.tourId,
    status: "CREATED"
  });

  return booking;
};