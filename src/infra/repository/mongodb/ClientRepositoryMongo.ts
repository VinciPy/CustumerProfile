import Client from "../../../domain/Entities/Client";
import Device from "../../../domain/Entities/Device";
import SocialAccount from "../../../domain/Entities/SocialAccount";
import ClientRepository from "../../../domain/Repository/ClientRepository";
import MongoDB from "../../database/MongoDB";
import mongoose from "mongoose";

export default class ClientRepositoryMongo implements ClientRepository {
  db;
  Client: any;

  constructor(MongoDB: MongoDB) {
    this.db = MongoDB.getMongoose();
    this.Client = this.db.model("Client", {
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

  async add(Client: Client): Promise<Client> {
    let client = new this.Client(Client);
    return await client.save();
  }

  async findByUUID(Client: Client): Promise<Client> {
    return await this.Client.findById(Client.getUUID());
  }

  async findAndUpdate(Client: Client, ClientNew: Client): Promise<Client> {
    return await this.Client.findByIdAndUpdate(Client.getUUID(), {
      Client,
    }).exec();
  }

  async findByIpAddress(IpAddress: string): Promise<Client> {
    return await this.Client.find({ IpAddress: IpAddress }).exec();
  }

  async findBySocialAccount(SocialAccount: SocialAccount): Promise<Client> {
    return await this.Client.find({
      SocialAccount: SocialAccount.getUUID(),
    }).exec();
  }

  async findByDevice(Device: Device): Promise<Client> {
    return await this.Client.find({ "Devices.UUID": Device.getUUID() }).exec();
  }

  async all() {
    return await this.Client.find().exec();
  }
}
