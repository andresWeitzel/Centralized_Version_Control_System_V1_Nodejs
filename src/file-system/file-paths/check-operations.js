//External
const fs = require("fs");
//Const
const CHECK_FOLDER_EXIST_ERROR_DETAIL =
  "Error in checkFolderExistFromPath file-paths function";
//Vars
let check;
let msgResponse;
let msgLog;

/**
 * @description This function responsible for check if directory exist or not and returning a boolean value
 * @param {string} dir string type
 */
const checkFolderExistFromPath = async (dir) => {
  try {
    check = fs.existsSync(dir);
    return check;
  } catch (error) {
    msgResponse = CHECK_FOLDER_EXIST_ERROR_DETAIL;
    msgLog = msgResponse + `Caused by ${error}`;
    console.log(msgLog);
    return msgResponse;
  }
};

module.exports = {
  checkFolderExistFromPath,
};
