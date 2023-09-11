//External
const fileSystemRoutes = require("express").Router();
//Controllers
const fileSystemController = require("../../controllers/file-system-controller");

fileSystemRoutes.get("/versions", fileSystemController.getAllVersioner);

fileSystemRoutes.post(
  "/file-data-from-path",
  fileSystemController.getFileDataFromPathController
);

fileSystemRoutes.post(
  "/files-names-from-path",
  fileSystemController.getFilesNamesFromPathController
);

fileSystemRoutes.post(
  "/file-stats-from-path",
  fileSystemController.getFileStatsFromPathController
);

module.exports = fileSystemRoutes;
