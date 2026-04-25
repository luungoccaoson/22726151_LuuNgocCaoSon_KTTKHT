const { producer } = require("../config/kafka");

const sendEvent = async (topic, message) => {
  await producer.send({
    topic,
    messages: [{ value: JSON.stringify(message) }],
  });
};

module.exports = { sendEvent };
