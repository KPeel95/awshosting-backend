require('dotenv').config();

const express = require('express');
const app = express();
const connectDB = require('./config/db.js');
const mongoose = require("mongoose");
const cors = require("cors");
const path = require ("path");

//ROUTE IMPORTS
const todoRoutes = require('./routes/todo');

// APP SETTINGS
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

// Define the /healthcheck route before static files
app.use("/healthcheck", (req, res) => {
  console.log('Healthcheck successful');
  console.log(`Request made to ${req.url}`);
  res.status(200).send("ok");
});

// Define your API routes
app.use(`/api/${process.env.API_V1}/todo`, todoRoutes);

//Serve static files (important: this should be after API routes)
app.use(express.static(path.resolve(__dirname, 'public')));

// Catch-all route for frontend (index.html)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// APP initialization and connection to DB
connectDB();
mongoose.connection.once('open', () => {
   app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
   });
});

// APP connection error
mongoose.connection.on("error", (error) => {
   console.log("Error connecting to db: ", error);
 });