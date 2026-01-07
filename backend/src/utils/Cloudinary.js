import { v2 as cloudinary } from "cloudinary";

let isCloudinaryConfigured = false;
const Cloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  isCloudinaryConfigured = true;
  console.log("Cloudinary connected successfully");
};

export default Cloudinary;
