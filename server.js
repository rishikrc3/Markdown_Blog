const path = require("path");
const express = require("express");
const app = express();
const articleRouter = require("./routes/articles.js");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test article",
      createdAt: new Date(),
      description: "This is a sample article",
    },
    {
      title: "Fok it",
      createdAt: new Date(),
      description: "This is a sample article",
    },
  ];
  res.render("articles/index", { articles: articles });
});

app.use("/articles", articleRouter);
app.listen(5000);
