const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/connectDB");

// Config .env File
dotenv.config();

// Database Call
connectDB();
// rest Object
const app = express();

// middlewere
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Routes
// user Route
app.use("/api/v1/users", require("./routers/userRoute"));

// Transaction Route
app.use("/api/v1/transactions", require("./routers/transactionRoute"));

//static Files read
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
// PORT
const PORT = 8080 || process.env.PORT;
// listen
app.listen(PORT, () => {
  console.log(`Server Runing On ${PORT}`);
});
