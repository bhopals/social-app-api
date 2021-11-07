const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  },
  (err) => console.log("error:", err)
);

// bhopal
// social@app123

const app = express();

app.listen(3000, () => console.log("Backend server is running"));
