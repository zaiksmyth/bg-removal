import mongoose from "mongoose";

const connectDB = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined");
  }

  mongoose.connection.on("connected", () => {
    console.log("Database connected");
  });

  mongoose.connection.on("error", (err) => {
    console.error("Database connection error:", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
  });

  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`);
  } catch (err) {
    console.error("Error connecting to the database:", err);
    process.exit(1); // Exit process on failure
  }
};

export default connectDB;
