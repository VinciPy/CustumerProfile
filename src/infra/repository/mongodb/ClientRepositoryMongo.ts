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
          CompanyId: String,
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
          CompanyId: String,
        },
      ],
    });
  }

  async add(Client: any): Promise<Client> {
    let client = new this.Client(Client);
    return await client.save();
  }

  async findByUUID(Client: Client): Promise<Client> {
    return await this.Client.find({ UUID: Client.getUUID() });
  }

  async findAndUpdate(Client: any, ClientNew: any) {
    let deviceexist = await this.findByDevice(ClientNew.Devices[0]._id);
    if (ClientNew.Purchases) {
      await this.clientUpdate(Client, ClientNew);
      await this.appendPurchases(Client, ClientNew);
      if (!deviceexist) {
        await this.appendDevice(Client, ClientNew);
      }
    } else {
      this.appendVisits(Client, ClientNew);
      if (deviceexist) {
        this.appendDevice(Client, ClientNew);
      }
      if (!this.findBySocialAccount(ClientNew.SocialAccounts[0]._id)) {
        this.appendSocialAccounts(Client, ClientNew);
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
    SocialAccount: string
  ): Promise<Client | undefined> {
    let client = await this.Client.find()
      .elemMatch("SocialAccounts", { _id: SocialAccount })
      .exec();
    if (client.length == 0) {
      return undefined;
    }
    return client;
  }

  async findByDevice(Device: string): Promise<Client | undefined> {
    let client = await this.Client.find()
      .elemMatch("Devices", { _id: Device })
      .exec();
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
  private async appendPurchases(Client: any, ClientNew: any) {
    await this.Client.findOneAndUpdate(
      { _id: Client[0]._id },
      { $push: { Purchases: ClientNew.Purchases[0] } }
    ).exec();
  }

  private async clientUpdate(Client: any, ClientNew: any) {
    let cpf = ClientNew.Cpf ? ClientNew.Cpf : "";
    let cellphone = ClientNew.Cellphone ? ClientNew.Cellphone : "";
    await this.Client.findOneAndUpdate(
      {
        _id: Client[0]._id,
      },
      { Cpf: cpf, Cellphone: cellphone }
    );
  }

  private async appendDevice(Client: any, ClientNew: any) {
    await this.Client.findOneAndUpdate(
      { _id: Client[0]._id },
      { $push: { Devices: ClientNew.Devices[0] } }
    ).exec();
  }

  private async appendVisits(Client: any, ClientNew: any) {
    await this.Client.findOneAndUpdate(
      { _id: Client[0]._id },
      { $push: { Visits: ClientNew.Visits[0] } }
    ).exec();
  }

  private async appendSocialAccounts(Client: any, ClientNew: any) {
    await this.Client.findOneAndUpdate(
      { _id: Client[0]._id },
      { $push: { SocialAccounts: ClientNew.SocialAccounts[0] } }
    ).exec();
  }
}
