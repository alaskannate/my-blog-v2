import mongoose from "mongoose";
require('dotenv').config();

const uri = process.env.MONGO_DB_URI

export default async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}