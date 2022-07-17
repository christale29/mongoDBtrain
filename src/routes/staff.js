// const express = require("express");

const express = require("express");
 const router = express.Router();
 const staff = require("../controller/staff");
  


router.post("/staff", staff.create);

module.exports = router; 
