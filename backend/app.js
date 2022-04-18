const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error.js");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

// app.use(express.json());
app.use(cookieParser());

app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use(fileUpload());

// Route Imports
const user = require("./routes/userRoute");
const project = require("./routes//projectRoute");

app.use("/api/v1", project);
app.use("/api/v1", user);

// Middleware for error
app.use(errorMiddleware);

module.exports = app;
