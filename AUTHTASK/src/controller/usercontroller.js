const { generateOTP } = require("../utils/generateotp");
const fs = require("fs");
const path = require("path");

const userlogin = (req, res) => {
  const { email, otp } = req.body;
  const filepath = path.join(__dirname, "../data.json");
  const data = fs.readFileSync(filepath, "utf-8");
  //   console.log(data);

  const oUser = JSON.parse(data);

  const nOtp = generateOTP();
  console.log(nOtp);
  if (oUser.users.includes(email)) {
    const index = oUser.users.indexOf(email);
    oUser.users[index] = email;
    oUser.otps[index] = nOtp;
  } else {
    oUser.users.push(email);
    oUser.users.push(nOtp);
  }

  fs.writeFileSync(filepath, JSON.stringify(oUser));

  res.send("otp send successfully");
};

const userlogout = () => {};
const getcar = () => {};

module.exports = { userlogin, userlogout, getcar };
