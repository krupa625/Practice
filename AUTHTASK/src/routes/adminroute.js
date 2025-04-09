const express = require("express");
const router = express.Router();
const {
  addcar,
  adminlogin,
  adminlogout,
  updatecar,
  deletecar,
} = require("../controller/admincontroller");

router.post("/addcar", addcar);
router.post("/admin/login", adminlogin);
router.post("/admin/logout", adminlogout);
router.put("/car/:iID", updatecar);
router.delete("/car/:iId", deletecar);

module.exports = router;
