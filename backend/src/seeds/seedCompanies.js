import bcrypt from "bcrypt";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Company from "../models/Company.js";


const hashedPassword = await bcrypt.hash("admin123", 10);

dotenv.config();

const companies = [
  {
    name: "Tata Consultancy Services",
    email: "careers@tcs.com",
    password: hashedPassword,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgdN5uaq0RMWIAydcXeyqdkm4dtErZs3sw0w&s",
  },
  {
    name: "Infosys",
    email: "careers@infosys.com",
    password: hashedPassword,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
  },
  {
    name: "Wipro",
    email: "careers@wipro.com",
    password: hashedPassword,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
  },
  {
    name: "Accenture",
    email: "careers@accenture.com",
    password: hashedPassword,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
  },
  {
    name: "Microsoft",
    email: "careers@microsoft.com",
    password: hashedPassword,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Google",
    email: "careers@google.com",
    password: hashedPassword,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Amazon",
    email: "careers@amazon.com",
    password: hashedPassword,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Goldman Sachs",
    email: "careers@gs.com",
    password: hashedPassword,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg",
  },
  {
    name: "JP Morgan Chase",
    email: "careers@jpmorgan.com",
    password: hashedPassword,
    image:
      "https://cdn.worldvectorlogo.com/logos/jpmorgan-chase.svg",
  },
  {
    name: "IBM",
    email: "careers@ibm.com",
    password: hashedPassword,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
];

const seedCompanies = async () => {
  try {
    await mongoose.connect(
      `${process.env.DATABASE_CONNECTION_URL}/superio-job-portal`
    );
    console.log("MongoDB connected");

    await Company.deleteMany();
    const insertedCompanies = await Company.insertMany(companies);

    console.log("Companies seeded successfully\n");

    process.exit(0);
  } catch (error) {
    console.error("Company seeder error:", error.message);
    process.exit(1);
  }
};

seedCompanies();
