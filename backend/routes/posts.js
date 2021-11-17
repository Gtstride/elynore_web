const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Welcome, How may we be of Service");
});

module.exports = router;
