// external imports
const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
dotenv.config();
const port = process.env.PORT || 5000;

// internal imports
const rememberRouter = require("./router/rememberRouter");
const usersRouter = require("./router/userRouter");
const { getLogin } = require("./controller/loginController");

const app = express();
const server = http.createServer(app);

// database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connection successful!"))
  .catch((err) => console.log(err));

// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// routing setup
app.use("/login", getLogin);
app.use("/users", usersRouter);
app.use("/remember", rememberRouter);

server.listen(port, () => {
  console.log(`app listening to port ${port}`);
});
