class BookingCreated {
  constructor(bookingId, userId, movieId, seatCount) {
    this.bookingId = bookingId;
    this.userId = userId;
    this.movieId = movieId;
    this.seatCount = seatCount;
  }
}

module.exports = BookingCreated;