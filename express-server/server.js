const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

const app = express(); // Creates an Express application.
app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    `<h1> Hello rahul this is express server </h1> ${process.env.message}`
  );
});
// app.get("/home", (req, res) => {
//   res.send("<h1> Home</h1>");
// });
// app.get("/about", (req, res) => {
//   res.send("<h1>about</h1>");
// });
// app.get("/contact", (req, res) => {
//   res.send("Contact us at contact@example.com");
// });
// app.get("/service", (req, res) => {
//   res.send("<h1>We offer Web Development & AI solutions.</h1>");
// });

// app.get("/api/json", (req, res) => {
//   res.json({
//     name: "Rahul Kumar",
//     age: 20,
//     profession: "Student",
//   });
// });

//   Handling POST Requests

// app.post("/api/user/hello", (req, res) => {
//   const { name, age, place } = req.body;

//   if (!name || !age || !place) {
//     return res.status(400).json({ error: "All fields are required" });
//   }
//   res.status(222).json({
//     message: "User Data recoved",
//     data: {
//       name,
//       age,
//       place,
//     },
//   });
// });



app.listen(PORT, () => {
  console.log(`Server is started at http://localhost:${PORT}`);
});
