//External
const fileSystemRoutes = require('express').Router();
//Controllers
const fileSystemController = require("../../controllers/file-system-controller");


fileSystemRoutes.get('/versions', fileSystemController.getAllVersioner);


fileSystemRoutes.get('/data-file', fileSystemController.getDataFile);


fileSystemRoutes.get('/file-paths-names', fileSystemController.getFilePathsNames);




module.exports=fileSystemRoutes;