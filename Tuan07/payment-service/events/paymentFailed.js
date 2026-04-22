class PaymentFailed {
  constructor(bookingId, reason) {
    this.bookingId = bookingId;
    this.reason = reason;
  }
}

module.exports = PaymentFailed;