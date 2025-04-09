const jwt = require("jsonwebtoken");
const secretKey = "abcde12345";

const token = jwt.sign(
  {
    id: 9,
    username: "Krupa",
  },
  secretKey,
  { expiresIn: "10sec" }
);

console.log(token);
jwt.verify(token, "abcde12345", (err, decoded) => {
  if (err) {
    console.log("Token is invalid");
  } else {
    console.log("Decoded Token:", decoded);
  }
});
