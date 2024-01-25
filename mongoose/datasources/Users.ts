import User from "@/mongoose/models/userModel";
import { MongoDataSource } from "apollo-datasource-mongodb";
import { UserDocument } from "./userData";

export default class Users extends MongoDataSource<UserDocument> {
  async getAllUsers() {
    try {
      return await User.find();
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  }
  async getUserById(id: string) {
    try {
      return await User.findOne().findById(id);
    } catch (error) {
      throw new Error("Failed to fetch user");
    }
  }
  async createUser({ input }: any) {
    try {
      return await User.create({ ...input });
    } catch (error) {
      throw new Error("Failed to create user");
    }
  }
  async getUserByEmail(email: string) {
    try {
      return await User.findOne({ email });
    } catch (error) {
      throw new Error("Failed to fetch user");
    }
  }
}
