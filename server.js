const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();
const authRouter = require("./routes/api/auth");
const studiosRouter = require("./routes/api/studios");
const usersRouter = require("./routes/api/users");

// creates express server
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")));

//Mongo Atlas URI
const uri = process.env.ATLAS_URI;
//connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//use routes
app.use("/api/auth", authRouter);
app.use("/api/studios", studiosRouter);
app.use("/api/users", usersRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//starts the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
