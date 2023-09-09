//External
const versionerRouter = require('express').Router();
//Controllers
const versionerController = require("../../controllers/versioner-controller");


versionerRouter.get('/versions', versionerController.getAllVersionerController);


module.exports=versionerRouter;