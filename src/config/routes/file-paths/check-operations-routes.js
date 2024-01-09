//External
const filePathsCheckOpRoutes = require("express").Router();
//Controllers
const checkOperationsController = require("../../../controllers/file-paths/check-operations");

filePathsCheckOpRoutes.post(
  "/check-folder-exist-from-path",
  checkOperationsController.checkFolderExistFromPathController,
);

module.exports = filePathsCheckOpRoutes;
