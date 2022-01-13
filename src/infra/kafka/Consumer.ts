import kafka from "./Kafka";

const consumer = kafka.consumer({ groupId: "teste" });

const consumir = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: "teste" });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }: any) => {
      console.log({
        value: message.value.toString(),
      });
    },
  });
};

export default consumir;
