const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const ConnectDB = require("./db");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

ConnectDB(); 

const userRoutes = require("./routes/userRoutes");

app.use("/api/auth", require("./routes/auth"));
app.use("/api/protected", require("./routes/protected"));


app.listen(3000, () => {
  console.log("Server running on port 3000");
});
