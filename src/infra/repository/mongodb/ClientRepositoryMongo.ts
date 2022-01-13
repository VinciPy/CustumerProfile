import Client from "../../../domain/Entities/Client";
import Device from "../../../domain/Entities/Device";
import SocialAccount from "../../../domain/Entities/SocialAccount";
import ClientRepository from "../../../domain/Repository/ClientRepository";
import MongoDB from "../../database/MongoDB";
import mongoose from "mongoose";

export default class ClientRepositoryMongo implements ClientRepository {
  db;

  constructor(MongoDB: MongoDB) {
    this.db = MongoDB.getMongoose();
    const Client = this.db.model("Client", {
      UUID: String,
      Name: String,
      Cellphone: String,
      Cpf: Number,
      Location: [
        {
          Country: String,
          State: String,
          City: String,
          Coordinate: String,
        },
      ],
      Devices: [
        {
          Tipo: String,
          IpAddress: String,
          UUID: String,
        },
      ],
      Visits: [
        {
          DateTime: Date,
          IpAddress: String,
          Location: String,
          Type: String,
          SocialAccount: String,
          Device: String,
        },
      ],
      FirstVisit: {
        DateTime: Date,
        IpAddress: String,
        Location: String,
        Type: String,
        SocialAccount: String,
        Device: String,
      },
      IpAddress: String,
      SocialAccounts: [
        {
          UUID: String,
          SocialMedia: String,
        },
      ],
    });
  }
  findByIpAddress(IpAddress: string): Promise<Client> {
    throw new Error("Method not implemented.");
  }
  findBySocialAccount(SocialAccount: SocialAccount): Promise<Client> {
    throw new Error("Method not implemented.");
  }
  findByDevice(Device: Device): Promise<Client> {
    throw new Error("Method not implemented.");
  }
}
