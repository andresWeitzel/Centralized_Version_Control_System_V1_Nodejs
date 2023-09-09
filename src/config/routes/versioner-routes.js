//External
const versionerRouter = require('express').Router();
//Controllers
const versionerController = require("../../controllers/versioner-controller");


versionerRouter.get('/versions', versionerController.getAllVersioner);


versionerRouter.get('/data-file', versionerController.getDataFile);


versionerRouter.get('/file-paths-names', versionerController.getFilePathsNames);


module.exports=versionerRouter;