import { ObjectId } from "mongodb";

export interface IMessage {
  email: string;
  name: string;
  message: string;
  _id?: ObjectId;
}
