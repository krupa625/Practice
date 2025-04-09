const express = require("express");
const app = express();
require("dotenv").config();
const jwt = require("jsonwebtoken");

app.use(express.json());


app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "admin") {
    const token = jwt.sign({ username }, process.env.JWT_SECRET_KEY, {
      expiresIn: 86400,
    });
    return res.json({ username, token, msg: "Login Success" });
  }
  return res.json({ msg: "Invalid Credentials" });
});

app.get("/home", (req, res) => {
  console.log("Protected endpoint that only authorized users can access");
  res.json({ msg: "Home Endpoint" });
});

app.listen(8000, () => console.log("Listening on 8000"));
