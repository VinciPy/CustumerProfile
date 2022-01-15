import kafka from "./Kafka";

const producer = async (message: string) => {
  const producer = kafka.producer();
  let message_json = JSON.stringify(message);
  await producer.connect();
  await producer.send({
    topic: "customerProfile",
    messages: [{ value: message_json }],
  });
};
export default producer;
