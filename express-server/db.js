const mongoose = require("mongoose");

const ConnectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/learning_express", {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log("MongoDB Connected Successfully!");
    } catch (err) {
        console.log("MongoDB Connection Failed:", err);
        process.exit(1);
    }
}
module.exports = ConnectDB;