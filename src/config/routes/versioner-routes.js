//External
const versionerRouter = require('express').Router();
//Controllers
const versionerController = require("../../controllers/versioner-controller");


versionerRouter.get('/test', versionerController.getAllVersionerController);


module.exports={versionerRouter};