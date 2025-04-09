const jwt = require("jsonwebtoken");
const secret = "SECRET_KEY";

const verifytoken = () => {
  const token = jwt.sign(payload, secret);

  const decode = jwt.verify(token, secret);
};

module.exports = { verifytoken };
