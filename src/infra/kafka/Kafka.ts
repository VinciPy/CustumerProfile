const { Kafka } = require("kafkajs");
const kafka = new Kafka({
  clientId: "1",
  brokers: ["kafka:9094"],
});
export default kafka;
