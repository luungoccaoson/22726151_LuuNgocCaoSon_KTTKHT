class PaymentSuccess {
  constructor(bookingId) {
    this.bookingId = bookingId;
    this.status = "SUCCESS";
  }
}

module.exports = PaymentSuccess;