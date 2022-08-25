const express = require("express");
const { chats } = require("./data/data");
const app = express(express);
const dotenv = require("dotenv");
const connectDB = require("./config/db");
dotenv.config();
connectDB();
app.get("/api/chat", (req, res) => {
  res.send(chats);
});
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log("Backend is running.");
});

// romittiwari
// romittiwari
