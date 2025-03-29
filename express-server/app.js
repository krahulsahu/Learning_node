const express = require('express');
const connectDB = require('./db');
const { User, Data } = require("./models/User");

const app = express();
app.use(express.json());

// Logging Middleware
// const logger = (req, res, next) => {
//     console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
//     next();
// }
// app.use(logger);

app.get('/', (req, res) => {
    res.send("<h1> Welcome to the Express App! </h1>");
})
connectDB();

app.post("/users", async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
})
app.get("/users", async (req, res) => {
    const user = await User.find();
    res.json(user);
});
app.get("/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(481).send("error: User not found");
        res.json(user);
    } catch (error) {
        res.status(482).send(`error: Invalid User ID : ${error}`);
    }
});

//   UPDATE User by ID (PUT Request)

app.put("/users/:id", async(req, res)=> {
    try{
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updateUser) return res.json({ error: "User not found" })
        res.json(updateUser);
    } catch (err) {
        res.json({ error: "Invalid USer ID" });
    }
})

//     DELETE User by ID (DELETE Request)

app.delete("/users/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    res.status(400).json({ error: "Invalid User ID" });
  }
});


// for Curd Operation for Data dataBase ...

app.post("/data", async (req, res) => {
    const postData = await Data.create(req.body);
    res.json(postData);
})

app.put("/data/:id", async (req, res) => {
    const updateData = await Data.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updateData);
})
app.delete("/data/:id", async (req, res) => {
    const deleteDate = await Data.findByIdAndDelete(req.params.id);
    res.json(deleteDate);
})
app.get("/data", async (req, res) => {
    const allData = await Data.find();
    res.json(allData);
})
app.get("/data/:id", async (req, res) => {
    const singleData = await Data.findById(req.params.id);
  res.json(singleData);
});
app.listen(8182, () => {
    console.log(`Server running on http://localhost:8182`);
})