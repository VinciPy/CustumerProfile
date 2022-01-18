import CustomerInteraction from "../../application/core/CustomerInteraction";
import ClientRepositoryMongo from "../repository/mongodb/ClientRepositoryMongo";
import kafka from "./Kafka";

const consumer = kafka.consumer({ groupId: "customerProfile" });

const listen = async (db: ClientRepositoryMongo) => {
  await consumer.connect();
  await consumer.subscribe({ topic: "customerProfile" });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }: any) => {
      let message_value = message.value.toString();
      message_value = JSON.parse(message_value);
      let customer_interaction = new CustomerInteraction(message_value, db);
      customer_interaction.run();
    },
  });
};

export default listen;
