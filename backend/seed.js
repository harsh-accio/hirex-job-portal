import mongoose from "mongoose";
import dotenv from "dotenv";
import Company from "./src/models/Company.js"; // adjust path if needed

dotenv.config();

const companies = [
  {
    _id: new mongoose.Types.ObjectId("65a111111111111111111111"),
    name: "TechNova",
    email: "hr@technova.com",
    password: "hashed_password",
    image: "https://via.placeholder.com/50",
  },
  {
    _id: new mongoose.Types.ObjectId("65a222222222222222222222"),
    name: "CloudCore",
    email: "careers@cloudcore.com",
    password: "hashed_password",
    image: "https://via.placeholder.com/50",
  },
  {
    _id: new mongoose.Types.ObjectId("65a333333333333333333333"),
    name: "DevSolutions",
    email: "jobs@devsolutions.com",
    password: "hashed_password",
    image: "https://via.placeholder.com/50",
  },
  {
    _id: new mongoose.Types.ObjectId("65a444444444444444444444"),
    name: "RemoteX",
    email: "team@remotex.com",
    password: "hashed_password",
    image: "https://via.placeholder.com/50",
  },
];

const seed = async () => {
  try {
    await mongoose.connect(
         `${process.env.DATABASE_CONNECTION_URL}/superio-job-portal`
       );

    console.log("MongoDB connected");

    // Optional: clear existing data
    await Company.deleteMany();

    await Company.insertMany(companies);

    console.log("Companies inserted successfully");

    process.exit(0);
  } catch (error) {
    console.error("Seeder error:", error);
    process.exit(1);
  }
};

seed();
