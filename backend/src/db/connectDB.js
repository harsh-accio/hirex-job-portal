import mongoose from "mongoose";

let isConnected = false;
const connectDB = async () => {
  try {
    await mongoose.connect(
      `${process.env.DATABASE_CONNECTION_URL}/superio-job-portal`
    );
   isConnected = true;

    console.log("✅ Database connected successfully");
  } catch (error) {
    console.log(error);
    console.log("❎ Database connection failed");
  }
};

export default connectDB ;
