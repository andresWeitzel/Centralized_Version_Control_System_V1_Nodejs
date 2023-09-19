//External
const filePathsCreateOpRoutes = require("express").Router();
//Controllers
const createOperationsController = require("../../../controllers/file-paths/create-operations");

filePathsCreateOpRoutes.post(
    "/copy-directories-from-path",
    createOperationsController.copyDirsFromPathServiceController
  );

module.exports = filePathsCreateOpRoutes;
