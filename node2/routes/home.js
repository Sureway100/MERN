const express = require("express");
const path = require("path");
const homeRouter = express.Router();
const homeController = require('../controllers/home_control');

homeRouter.get("/home", homeController.getHome);
homeRouter.post("/home", homeController.postHome);

module.exports = homeRouter;
