//External
const filePathsGetOpRoutes = require("express").Router();
//Controllers
const filePathsController = require("../../../controllers/file-paths/get-operations");

filePathsGetOpRoutes.get("/versions", filePathsController.getAllVersioner);

filePathsGetOpRoutes.post(
  "/file-data-from-path",
  filePathsController.getFileDataFromPathController,
);

filePathsGetOpRoutes.post(
  "/files-names-from-path",
  filePathsController.getFilesNamesFromPathController,
);

filePathsGetOpRoutes.post(
  "/file-stats-from-path",
  filePathsController.getFileStatsFromPathController,
);

filePathsGetOpRoutes.post(
  "/file-extension-from-path",
  filePathsController.getFileExtensionsFromPathController,
);

filePathsGetOpRoutes.post(
  "/file-elements-from-path",
  filePathsController.getFileElementsFromPathController,
);

module.exports = filePathsGetOpRoutes;
