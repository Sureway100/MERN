const express = require("express");
const resultRouter = express.Router();
// const resultData = require("../routes/login");
// const homeController = require('../controllers/home_control');
const resultController = require('../controllers/result_controller');


// route of result which connects to its controller
resultRouter.get("/result/:resultID",resultController.oneResult );
resultRouter.use("/result",resultController.resultProducts );

module.exports = resultRouter;

