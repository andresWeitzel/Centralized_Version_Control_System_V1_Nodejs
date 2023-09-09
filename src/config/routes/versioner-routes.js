//External
const versionerRouter = require('express').Router();
//Controllers
const versionerController = require("../../controllers/versioner-controller");


versionerRouter.get('/versions', versionerController.getAllVersioner);


versionerRouter.get('/data-file', versionerController.getDataFile);


versionerRouter.get('/file-names', versionerController.getFileNames);


module.exports=versionerRouter;