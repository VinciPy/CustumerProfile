import InteractionAdapter from "../../adapters/InteractionAdapter";
import CustomerInteraction from "../../application/core/CustomerInteraction";
import kafka from "./Kafka";

const consumer = kafka.consumer({ groupId: "customerProfile" });

const listen = async (db: any) => {
  await consumer.connect();
  await consumer.subscribe({ topic: "customerProfile" });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }: any) => {
      let message_value = message.value.toString();
      console.log(message_value);
      return;
      new CustomerInteraction(message_value, db);
    },
  });
};

export default listen;
