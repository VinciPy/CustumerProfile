import Connection from "./Connection";
import mongoose from "mongoose";

export default class MongoDB implements Connection {
  private mongoose: any;

  public getMongoose() {
    return this.mongoose;
  }

  connect() {
    this.mongoose = mongoose;
    mongoose.connect("mongodb://root:1234@mongo:27017");
  }
}
