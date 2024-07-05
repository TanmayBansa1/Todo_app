
const express = require("express");

const router = express.Router();


const homeController = require("../controllers/home_controller");

//Access the Home Controller's incompleteTasks() Function by '/incomplete-tasks' route
router.get("/incomplete-tasks", homeController.incompleteTasks);
//Access the Home Controller's completedTasks() Function by '/completed-tasks' route
router.get("/completed-tasks", homeController.completedTasks);


module.exports = router;
