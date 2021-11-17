const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("../backend/db");
const auth = require("./middleware/authetication");
const {
  registerHandler,
  contactHandler,
} = require("./middleware/errorHandler");

//import routes
const postRoute = require("./routes/posts");
const contactRoute = require("./routes/contact");

(async function db() {
  await connection();
})();

app.use(cors());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

//middleware
app.use(express.json());

//route middleware
app.use("/", postRoute);
app.use("/contact", contactHandler, contactRoute);

app.get("/contacts", auth, (req, res) => {
  Contact.find()
    .then((users) => {
      res.send(users);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.listen(5000, function () {
  console.log("App listening on port 5000!");
});
