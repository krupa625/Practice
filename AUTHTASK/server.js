const express = require("express");
const app = express();
const port = 3000;
const router = require("./src/routes/index");
// const { routes } = require("./src/routes");

app.use("/healthcheck", (req, res) => {
  res.send("Server is Running!");
});
app.use(express.json());
app.use("/api", router);

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
