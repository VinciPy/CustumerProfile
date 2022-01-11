import { Request, Response } from 'express';
const { Kafka } = require('kafkajs')
/**
 * Arquivo: app.js
 * Descrição: arquivo principal e responsável pela execução da aplicação.
 * Data: 05/07/2019
 * Author: Glaucia Lemos
 */

 const express = require('express');

 const app = express();
 
 const port = process.env.PORT || 3000;
 

const kafka = new Kafka({
  clientId: '1',
  brokers: ['kafka:9094']
})

 app.get('/', (req: Request, res: Response) => {
   res.status(200).send({
     success: 'true',
     message: 'Seja Bem-Vindo(a) ao mundo Docker!',
     version: '1.0.0',
   });
 });

 app.get('/enviar', (req: any, res: any) => {
    enviar();
   res.status(200).send({
     success: 'true',
     message: 'Seja Bem-Vindo(a) ao mundo Docker!',
     version: '1.0.0',
   });
 })

 const enviar = async () => {
  const producer = kafka.producer()

  await producer.connect()
  await producer.send({
    topic: 'teste',
    messages: [
      { value: 'Hello KafkaJS user!' },
    ],
  })
 }
 
 app.listen(port);
 console.log('Aplicação executando na porta ', port);


const consumer = kafka.consumer({ groupId: 'teste' })

const consumir = async() => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'teste' })
  await consumer.run({
    eachMessage: async ({ topic, partition, message }: any) => {
        console.log({
            value: message.value.toString(),
        })
    },
  })
}
consumir();