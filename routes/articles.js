const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("h1");
});

router.get("/new", (req, res) => {
  res.render("articles/new");
});

router.post("/", (res, req) => {});
module.exports = router;
