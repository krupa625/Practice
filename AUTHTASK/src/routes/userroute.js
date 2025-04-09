const express = require("express");
const router = express.Router();
const {
  userlogin,
  userlogout,
  getcar,
} = require("../controller/usercontroller");

router.post("/user/login", userlogin);
router.post("/user/logout", userlogout);
router.get("/cars", getcar);

module.exports = router;
