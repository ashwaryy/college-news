const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./db/connect");
const router = require("./routes/router");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
  next();
});

app.get("/", (req, res) => {
  res.send("hello from simple server :)");
});

app.use("/", router);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is running`));
  } catch (error) {
    console.log(error);
  }
};

start();
