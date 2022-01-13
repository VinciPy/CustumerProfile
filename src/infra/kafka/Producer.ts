import kafka from "./Kafka";

const producer = async (message) => {
  const producer = kafka.producer();

  await producer.connect();
  await producer.send({
    topic: "teste",
    messages: [{ value: message }],
  });
};
export default producer;
