const cloudinary = require("cloudinary").v2;

// configure with env data
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadMediaToClodinary = async (filepath) => {
  try {
    const result = await cloudinary.uploader.upload(filepath, {
      resource_type: "auto",
    });

    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Error uploading to cloudinary");
  }
};

const deleteMeidaFromCloudinary = async (publicID) => {
  try {
    await cloudinary.uploader.destroy(publicID);
  } catch (error) {
    console.log(error);
    throw new Error("Filed to delete asses form cloudinary");
  }
};

module.exports = {uploadMediaToClodinary,deleteMeidaFromCloudinary}

