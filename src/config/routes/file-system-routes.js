//External
const fileSystemRoutes = require("express").Router();
//Controllers
const fileSystemController = require("../../controllers/file-paths/file-system-controller");

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

fileSystemRoutes.post(
  "/file-extension-from-path",
  fileSystemController.getFileExtensionsFromPathController
);

fileSystemRoutes.post(
  "/file-elements-from-path",
  fileSystemController.getFileElementsFromPathController
);

fileSystemRoutes.post(
  "/check-folder-exist-from-path",
  fileSystemController.checkFolderExistFromPathController
);

module.exports = fileSystemRoutes;
