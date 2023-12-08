//External
const fsPromises = require("fs/promises");
const fs = require("fs");
let path = require("path");
//Const-vars
const encoding = "utf-8";
let check;
let msg;

//For refactor


/**
 * @description This function responsible for check if directory exist or not and returning a boolean value
 * @param {string} dir string type
 */
const checkFolderExistFromPath = async (dir) => {
    try {
      check = fs.existsSync(dir);
      return check;
    } catch (error) {
      msg = `Error in checkFolderExistFromPath() function. Caused by ${error}`;
      console.log(msg);
    }
  };

  
module.exports = {
    checkFolderExistFromPath
  };
  
