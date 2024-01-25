import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  password: { type: String },
  address: { type: String },
  userRole: { type: String },
});

export default mongoose.models.User || mongoose.model("User", userSchema);
