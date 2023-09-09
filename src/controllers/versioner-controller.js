//External
require("dotenv").config();
//Enums
const { statusCode } = require("../enums/http/status-code");
//File-system
const { readData } = require("../file-system/operations/read-file");
const { getFilesPathsNames } = require("../file-system/file-paths/operations");
//Const-vars
let msg;
let code;
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

const getDataFile = async (req, res) => {
  try {
    let data = await readData();
    code = statusCodeOk;
    res.status(code).send(data);
  } catch (error) {
    code = statusCodeInternalServerError;
    msg = `Error in getDataFile() function. Caused by ${error}`;
    console.log(msg);
    res.status(code).send(msg);
  }
};

const getFilePathsNames = async (req, res) => {
  try {
    let dir ="/Users/andre/OneDrive/Escritorio/LenguajesProgramacion/NodeJs/Proyectos2023/Software_Versioner/Software_Versioner_Nodejs/"
    let fileNames = await getFilesPathsNames(dir);
    code = statusCodeOk;
    res.status(code).send(fileNames);
  } catch (error) {
    code = statusCodeInternalServerError;
    msg = `Error in getFilePathsNames() function. Caused by ${error}`;
    console.log(msg);
    res.status(code).send(msg);
  }
};

module.exports = {
  getAllVersioner,
  getDataFile,
  getFilePathsNames
};
