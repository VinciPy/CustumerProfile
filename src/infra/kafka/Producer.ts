import kafka from "./Kafka";

const producer = async (message: string) => {
  const producer = kafka.producer();

  await producer.connect();
  await producer.send({
    topic: "customerProfile",
    messages: [{ value: message }],
  });
};
export default producer;
