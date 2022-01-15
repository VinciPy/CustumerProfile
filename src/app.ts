import { Request, Response } from "express";
import MongoDB from "./infra/database/MongoDB";
import listen from "./infra/kafka/Consumer";
import producer from "./infra/kafka/Producer";
import ClientRepositoryMongo from "./infra/repository/mongodb/ClientRepositoryMongo";
/**
 * Arquivo: app.ts
 * Descrição: arquivo principal e responsável pela execução da aplicação.
 * Data: 21/01/2022
 * Author: Vinicius Santana
 */

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;
let db = new MongoDB();
db.connect();
let client = new ClientRepositoryMongo(db);

app.get("/", (req: Request, res: Response) => {
  let clients = client.all();
  res.status(200).send({
    success: "true",
    message: JSON.stringify(clients),
  });
});

app.post("/", (req: Request, res: Response) => {
  producer(req.body);
  res.status(200).send({
    success: "true",
    message: "Notification has benn add to que",
  });
});

app.get("/cliente/:UUID", (req: any, res: any) => {
  let clientReq = client.findByUUID(req.body.UUID);
  res.status(200).send({
    success: "true",
    message: JSON.stringify(clientReq),
  });
});

app.listen(port);

listen(db);
