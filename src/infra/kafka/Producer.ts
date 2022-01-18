import kafka from "./Kafka";

const producer = async (message: string) => {
  try {
    const producer = kafka.producer();
    let message_json = JSON.stringify(message);
    await producer.connect();
    await producer.send({
      topic: "customerProfile",
      messages: [{ value: message_json }],
    });
  } catch (exception) {
    return exception;
  }
};
export default producer;
