
const express = require("express");
//Create a Local Router
const router = express.Router();

//Require Home Controller
const homeController = require("../controllers/home_controller");


router.get("/", homeController.home);

module.exports = router;
