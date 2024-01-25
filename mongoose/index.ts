import mongoose from "mongoose";

const uri = process.env.NEXT_PUBLIC_MONGODB_URI;

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState !== 0) return;
    if (uri) {
      await mongoose.connect(uri);
      console.log("🎉 connected to database successfully");
    }
  } catch (error) {
    console.error(error);
  }
};
