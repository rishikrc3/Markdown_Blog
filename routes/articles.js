const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Inside the articles");
});

module.exports = router;
