const express = require("express");
const userroutes = require("./userroute");
const adminroute = require("./adminroute");
const router = express.Router();

router.use("/", userroutes);
router.use("/", adminroute);

module.exports = router;
