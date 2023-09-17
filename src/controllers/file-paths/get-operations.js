//External
require("dotenv").config();
//Enums
const { statusCode } = require("../../enums/http/status-code");
//File-system
const { getFilesNamesFromPathService, getFileStatsFromPathService, getFileDataFromPathService, getFileExtensionsFromPathService, getFileElementsFromPathService } = require("../../services/file-paths/get-operations");
//Const-vars
let msg;
let code;
let fileData;
let filesNames;
let filesStats;
let extension;
let elements;
let check;
const statusCodeInternalServerError = statusCode.INTERNAL_SERVER_ERROR;
const statusCodeBadRequest = statusCode.BAD_REQUEST;
const statusCodeOk = statusCode.OK;

const getAllVersioner = async (req, res) => {
  try {
    let arrayVersions = [];
    for (let i = 0; i <= 100; i++) {
      arrayVersions.push(`v1.0.${i}`);
    }
    code = statusCodeOk;
    res.status(code).send(arrayVersions);
  } catch (error) {
    code = statusCodeInternalServerError;
    msg = `Error in getAllVersioner() function. Caused by ${error}`;
    console.log(msg);
    res.status(code).send(msg);
  }
};

const getFileDataFromPathController = async (req, res) => {
  try {
    fileData = await getFileDataFromPathService(req);
    code = statusCodeOk;
    res.status(code).send(fileData);
  } catch (error) {
    code = statusCodeInternalServerError;
    msg = `Error in getFileDataFromPathController() function. Caused by ${error}`;
    console.log(msg);
    res.status(code).send(msg);
  }
};

const getFilesNamesFromPathController = async (req, res) => {
  try {
    filesNames = await getFilesNamesFromPathService(req);
    code = statusCodeOk;
    res.status(code).send(filesNames);
  } catch (error) {
    code = statusCodeInternalServerError;
    msg = `Error in getFilesNamesFromPathController() function. Caused by ${error}`;
    console.log(msg);
    res.status(code).send(msg);
  }
};

const getFileStatsFromPathController = async (req, res) => {
  try {
    filesStats = await getFileStatsFromPathService(req);
    code = statusCodeOk;
    res.status(code).send(filesStats);
  } catch (error) {
    code = statusCodeInternalServerError;
    msg = `Error in getFileStatsFromPathController() function. Caused by ${error}`;
    console.log(msg);
    res.status(code).send(msg);
  }
};

const getFileExtensionsFromPathController = async (req, res) => {
  try {
    extension = await getFileExtensionsFromPathService(req);
    code = statusCodeOk;
    res.status(code).send(extension);
  } catch (error) {
    code = statusCodeInternalServerError;
    msg = `Error in getFileExtensionsFromPathController() function. Caused by ${error}`;
    console.log(msg);
    res.status(code).send(msg);
  }
};

const getFileElementsFromPathController = async (req, res) => {
  try {
    elements = await getFileElementsFromPathService(req);
    code = statusCodeOk;
    res.status(code).send(elements);
  } catch (error) {
    code = statusCodeInternalServerError;
    msg = `Error in getFileElementsFromPathController() function. Caused by ${error}`;
    console.log(msg);
    res.status(code).send(msg);
  }
};


module.exports = {
  getAllVersioner,
  getFileDataFromPathController,
  getFilesNamesFromPathController,
  getFileStatsFromPathController,
  getFileExtensionsFromPathController,
  getFileElementsFromPathController,
};