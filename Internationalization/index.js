const express = require("express");
const i18n = require("i18n");

const app = express();

i18n.configure({
  locales: ["en", "hi", "gu"],
  directory: __dirname + "/locales",
  defaultLocale: "en",
  queryParameter: "lang",
  autoReload: true,
  syncFiles: true,
});

app.use(i18n.init);

app.get("/home", (req, res) => {
  res.json({
    message: res.__("welcome"),
    description: res.__("about"),
  });
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
  console.log("Try visiting http://localhost:3000/home?lang=hi");
});
