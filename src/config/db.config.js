const mongoose = require("mongoose");
const serverConfig = require("./server.config");
async function connectDB() {
  try {
    if (serverConfig.NODE_ENV === "development") {
      await mongoose.connect(serverConfig.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Database connected successfully");
    }
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
}
module.exports = connectDB;
