import mongoose from "mongoose";
import dotenv from "dotenv";
import Job from "../models/Job.js";
import Company from "../models/Company.js";

dotenv.config();

/* =======================
   24 JOB ENTRIES (OUTSIDE)
======================= */

const jobsData = [
  // TCS
  {
    title: "Software Engineer",
    location: "Bangalore, India",
    level: "Junior",
    description: "Develop enterprise applications using Java.",
    salary: 550000,
    category: "Development",
    companyName: "Tata Consultancy Services",
  },
  {
    title: "System Analyst",
    location: "Pune, India",
    level: "Mid Level",
    description: "Analyze business requirements and systems.",
    salary: 900000,
    category: "IT",
    companyName: "Tata Consultancy Services",
  },

  // Infosys
  {
    title: "Full Stack Developer",
    location: "Hyderabad, India",
    level: "Mid Level",
    description: "Work on MERN stack enterprise projects.",
    salary: 1100000,
    category: "Development",
    companyName: "Infosys",
  },
  {
    title: "Automation Tester",
    location: "Mysore, India",
    level: "Junior",
    description: "Automate test cases using Selenium.",
    salary: 500000,
    category: "Testing",
    companyName: "Infosys",
  },

  // Wipro
  {
    title: "Cloud Engineer",
    location: "Bangalore, India",
    level: "Mid Level",
    description: "Manage AWS and Azure cloud infrastructure.",
    salary: 1200000,
    category: "Cloud",
    companyName: "Wipro",
  },
  {
    title: "Support Engineer",
    location: "Chennai, India",
    level: "Junior",
    description: "Provide L1/L2 support to enterprise clients.",
    salary: 450000,
    category: "Support",
    companyName: "Wipro",
  },

  // Accenture
  {
    title: "Technology Consultant",
    location: "Gurgaon, India",
    level: "Senior",
    description: "Lead digital transformation initiatives.",
    salary: 1800000,
    category: "Consulting",
    companyName: "Accenture",
  },
  {
    title: "Business Analyst",
    location: "Mumbai, India",
    level: "Mid Level",
    description: "Work with stakeholders to gather requirements.",
    salary: 1300000,
    category: "Business",
    companyName: "Accenture",
  },

  // Microsoft
  {
    title: "Software Development Engineer",
    location: "Hyderabad, India",
    level: "Senior",
    description: "Build scalable cloud services using Azure.",
    salary: 3200000,
    category: "Development",
    companyName: "Microsoft",
  },
  {
    title: "Program Manager",
    location: "Bangalore, India",
    level: "Mid Level",
    description: "Drive cross-team product execution.",
    salary: 2500000,
    category: "Management",
    companyName: "Microsoft",
  },

  // Google
  {
    title: "Software Engineer",
    location: "Bangalore, India",
    level: "Senior",
    description: "Develop large-scale distributed systems.",
    salary: 3500000,
    category: "Development",
    companyName: "Google",
  },
  {
    title: "Data Engineer",
    location: "Hyderabad, India",
    level: "Mid Level",
    description: "Build big data pipelines.",
    salary: 2800000,
    category: "Data",
    companyName: "Google",
  },

  // Amazon
  {
    title: "SDE I",
    location: "Bangalore, India",
    level: "Junior",
    description: "Develop backend services at Amazon scale.",
    salary: 1800000,
    category: "Development",
    companyName: "Amazon",
  },
  {
    title: "Operations Manager",
    location: "Hyderabad, India",
    level: "Mid Level",
    description: "Manage logistics and fulfillment operations.",
    salary: 1500000,
    category: "Operations",
    companyName: "Amazon",
  },

  // Goldman Sachs
  {
    title: "Technology Analyst",
    location: "Bangalore, India",
    level: "Junior",
    description: "Develop internal financial platforms.",
    salary: 1600000,
    category: "Finance",
    companyName: "Goldman Sachs",
  },
  {
    title: "Associate Engineer",
    location: "Mumbai, India",
    level: "Senior",
    description: "Build trading and risk systems.",
    salary: 2800000,
    category: "Finance",
    companyName: "Goldman Sachs",
  },

  // JP Morgan
  {
    title: "Technology Analyst",
    location: "Mumbai, India",
    level: "Junior",
    description: "Work on banking applications.",
    salary: 1400000,
    category: "Finance",
    companyName: "JP Morgan Chase",
  },
  {
    title: "Software Engineer",
    location: "Bangalore, India",
    level: "Mid Level",
    description: "Develop secure financial systems.",
    salary: 2100000,
    category: "Finance",
    companyName: "JP Morgan Chase",
  },

  // IBM
  {
    title: "AI Engineer",
    location: "Bangalore, India",
    level: "Mid Level",
    description: "Build AI solutions using Watson.",
    salary: 1700000,
    category: "AI/ML",
    companyName: "IBM",
  },
  {
    title: "Cloud Architect",
    location: "Pune, India",
    level: "Senior",
    description: "Design enterprise cloud architectures.",
    salary: 2600000,
    category: "Cloud",
    companyName: "IBM",
  },
];

/* =======================
   SEED FUNCTION
======================= */

const seedJobs = async () => {
  try {
  await mongoose.connect(
            `${process.env.DATABASE_CONNECTION_URL}/superio-job-portal`
          );

    const companies = await Company.find();
    const companyMap = {};

    companies.forEach((c) => {
      companyMap[c.name] = c._id;
    });

    const jobs = jobsData.map((job) => ({
      ...job,
      companyId: companyMap[job.companyName],
      date: Date.now(),
      visible: true,
    }));

    await Job.deleteMany();
    await Job.insertMany(jobs);

    console.log("✅ 24 jobs inserted and properly connected");
    process.exit(0);
  } catch (err) {
    console.error("❌ Job seeding failed:", err.message);
    process.exit(1);
  }
};

seedJobs();


