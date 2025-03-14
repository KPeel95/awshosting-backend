require('dotenv').config();

const express = require('express');
const app = express();
const connectDB = require('./config/db.js');
const mongoose = require("mongoose");
const cors = require("cors");
const path = require ("path");

//ROUTE IMPORTS
const todoRoutes = require('./routes/todo');

//APP SETTINGS
app.use(express.json());
const PORT = process.env.PORT || 8080;
app.use(cors());

//Serve static assets in public
app.use(express.static(path.join(__dirname, "public")));

app.use("/healthcheck", (req, res) => {
    res.status(200).send("ok");
  });

// app.use(`/api/${process.env.API_V1}/todo`, todoRoutes);

app.listen(PORT,()=> console.log('Server is running on port ${PORT}'));

//APP initialization
//connectDB();
//mongoose.connection.once('open', () => {
//    app.listen(PORT, () => {
//      console.log(`Server running on port ${PORT}`);
//    });
//});
//APP connection error
//mongoose.connection.on("error", (error) => {
//    console.log("Error connecting to db: ", error);
//  });
