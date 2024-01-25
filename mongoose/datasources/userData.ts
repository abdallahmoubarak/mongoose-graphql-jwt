import User from "@/mongoose/models/userModel";
import { MongoDataSource } from "apollo-datasource-mongodb";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";

interface UserDocument {
  _id: ObjectId;
}

export default class Users extends MongoDataSource<UserDocument> {
  async getAllUsers() {
    try {
      return await User.find();
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  }
  async findOneById(id: string) {
    if (!id) return null;
    try {
      const user = await User.findById(new mongoose.Types.ObjectId(id));
      return user ? user : null;
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
