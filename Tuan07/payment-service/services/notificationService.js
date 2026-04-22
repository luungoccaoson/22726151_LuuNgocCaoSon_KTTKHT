const notifySuccess = (data) => {
  console.log(`🎉 NOTIFICATION: Booking ${data.bookingId} thành công!`);
};

const notifyFailed = (data) => {
  console.log(`⚠️ NOTIFICATION: Booking ${data.bookingId} thất bại!`);
};

module.exports = {
  notifySuccess,
  notifyFailed,
};