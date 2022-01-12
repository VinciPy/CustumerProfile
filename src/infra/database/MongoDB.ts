import Connection from "./Connection";
import mongoose from "mongoose";

export default class MongoDB implements Connection {
  private mongoose: any;

  public getMongoose() {
    return this.mongoose;
  }
  public setMongoose(value: any) {
    this.mongoose = value;
  }

  connect() {
    this.mongoose = mongoose;
    mongoose.connect("mongo:27017");
  }
}
