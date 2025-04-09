const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const port = 3000;

let data = [
  {
    name: "admin",
    password: "abc",
    role: "admin",
  },
  {
    name: "ahh",
    password: "123",
    role: "user",
  },
];

app.get("/", (req, res) => {
  res.json({
    route: "/",
    authentication: false,
  });
});

app.use(express.json());
app.post("/login", (req, res) => {
  const { name, password, role } = req.body;
  // console.log(req);

  let isPresent = false;
  //   const hashp = crypto.createHash("sha256").update("abc").digest("based64");
  const i = data.findIndex((user) => {
    return user.name === name && user.password === password;
  });
  if (data[i].name === name && data[i].password === password) {
    isPresent = true;
  }
  if (isPresent) {
    const token = jwt.sign(data[i], "secret", { expiresIn: "1h" });

    res.json({
      login: true,
      token: token,
      data: data[i],
    });
  } else {
    res.json({
      login: false,
      error: "please check name and password.",
    });
  }
});

app.get("/check", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  // console.log(req.headers.authorization.split(" ")[1]);
  // console.log(req.headers.authorization);

  const decode = jwt.verify(token, "secret");
  res.send(decode);
});

app.listen(port, () => {
  console.log(`Server is running : 
    http://localhost:${port}/`);
});
