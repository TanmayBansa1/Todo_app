
const express = require("express");

const router = express.Router();

//Require Home Router File
const homeRouterFile = require("./home");
//Require Tasks Router File
const taskRouterFile = require("./tasks");
//Require Tasks List Router File
const taskListRouterFile = require("./task-list");

router.use("/", homeRouterFile);

router.use("/task-list", taskListRouterFile);

router.use("/tasks", taskRouterFile);


console.log("Router Loaded");
//Export the Index Router
module.exports = router;
