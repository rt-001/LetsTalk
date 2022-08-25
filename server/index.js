const express = require("express");
const { chats } = require("./data/data");
const app = express(express);
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
dotenv.config();
connectDB();
app.use(express.json());
app.get("/api/chat", (req, res) => {
  res.send(chats);
});
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`Backend is running.${PORT}`);
});
app.use("/api/user", userRoutes);
// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);
