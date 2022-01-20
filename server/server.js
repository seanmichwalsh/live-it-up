const express = require("express");
const bodyParser = require("body-parser");
const dbConfig = require("./config/database.config");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3001;

app.disable("x-powered-by"); // for security reasons though not fool-proof

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});

mongoose.Promise = global.Promise;

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now.");
    console.log(err);
    process.exit(1);
  });

app.use(require("./app/routes"));
