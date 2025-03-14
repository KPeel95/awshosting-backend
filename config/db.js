const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}, ${conn.connection.name}`);
  } catch (error) {
    console.log("Error connecting to db: ", error);
  }
};

module.exports = connectDB;
