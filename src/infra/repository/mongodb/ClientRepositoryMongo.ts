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
      Cpf: String,
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
      Purchases: [
        {
          DatePurchase: Date,
          Amount: Number,
          Discount: Number,
          Products: [],
        },
      ],
    });
  }

  async add(Client: any): Promise<Client> {
    let client = new this.Client(Client);
    console.log(client);
    return await client.save();
  }

  async findByUUID(Client: Client): Promise<Client> {
    return await this.Client.find({ UUID: Client.getUUID() });
  }

  async findAndUpdate(Client: any, ClientNew: any) {
    if (ClientNew.Purchases) {
      await this.Client.findOneAndUpdate(
        { _id: Client[0]._id },
        { $push: { Purchases: ClientNew.Purchases[0] } }
      ).exec();
    } else {
      await this.Client.findOneAndUpdate(
        { _id: Client[0]._id },
        { $push: { Visits: ClientNew.Visits[0] } }
      ).exec();
      if (!this.findByDevice(ClientNew.Device._id)) {
        await this.Client.findOneAndUpdate(
          { _id: Client[0]._id },
          { $push: { Visits: ClientNew.Device } }
        ).exec();
      }
      if (!this.findBySocialAccount(ClientNew.SocialAccount.id)) {
        await this.Client.findOneAndUpdate(
          { _id: Client[0]._id },
          { $push: { Visits: ClientNew.SocialAccount } }
        ).exec();
      }
    }
  }

  async findByIpAddress(IpAddress: string): Promise<Client | undefined> {
    let client = await this.Client.find({ IpAddress: IpAddress }).exec();
    if (client.length == 0) {
      return undefined;
    }
    return client;
  }

  async findBySocialAccount(
    SocialAccount: SocialAccount
  ): Promise<Client | undefined> {
    let client = await this.Client.find({
      SocialAccounts: SocialAccount.getUUID(),
    }).exec();
    if (client.length == 0) {
      return undefined;
    }
    return client;
  }

  async findByDevice(Device: Device): Promise<Client | undefined> {
    let client = await this.Client.find({
      "Devices.UUID": Device.getUUID(),
    }).exec();
    if (client.length == 0) {
      return undefined;
    }
    return client;
  }

  async all() {
    let clients = await this.Client.find().exec();
    return clients;
  }

  async findByCpf(Cpf: any): Promise<Client | undefined> {
    let client = await this.Client.find({ Cpf: Cpf }).exec();
    if (client.length == 0) {
      return undefined;
    }
    return client;
  }
}
