const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");

const bodyParser = require("body-parser");
// // const cp = require("cookie-parser")
// //routes
const usersRouter = require("./routes/users-router");


// const CookiesController = require("./controllers/cookiesController");

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TestDB', {useNewUrlParser: true});


var customCors = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Credentials", true);

  next();
};

app.use(customCors);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(auth);
// app.use(cp());

// app.use((req, res, next) => {
// //   logger.debug(req.url);

//   next();
// });


app.use("/users", usersRouter);
// app.use("/accounts", accountRouter);
// app.use("/login", loginRouter);
// app.use("/config", configuration);
// // app.use("/auth", authRouter)
// app.use("/order-check", orderRouter);

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send(error);
});
const port = process.env.PORT || 3200;

app.listen(port);
