//External
require("dotenv").config();
//Services
const { copyDirsFromPathService } = require("../../services/file-paths/create-operations");
//Enums
const { statusCode } = require("../../enums/http/status-code");
//Const-vars
let msg;
let code;
let check;
const statusCodeInternalServerError = statusCode.INTERNAL_SERVER_ERROR;
const statusCodeBadRequest = statusCode.BAD_REQUEST;
const statusCodeOk = statusCode.OK;

const copyDirsFromPathServiceController = async (req, res) => {
    try {
      check = await copyDirsFromPathService(req);
      code = statusCodeOk;
      res.status(code).send(check);
    } catch (error) {
      code = statusCodeInternalServerError;
      msg = `Error in copyDirsFromPathServiceController() function. Caused by ${error}`;
      console.log(msg);
      res.status(code).send(msg);
    }
  };
  
  module.exports = {
    copyDirsFromPathServiceController
  };