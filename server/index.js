const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
const PORT = 3000;

const connent=async()=>{
    try {
        console.log('DB connected');
        await mongoose.connect(process.env.MONGO_URL)
    } catch (error) {
        throw error
    }
};
connent();

app.use(
    cors({
      origin: ["http://localhost:3001"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );

app.use('/', require('./routes/AuthRoute'));
app.use(cookieParser)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});