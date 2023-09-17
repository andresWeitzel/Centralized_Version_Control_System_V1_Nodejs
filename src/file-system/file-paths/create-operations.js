//External
const fsPromises = require("fs/promises");
const fs = require("fs");
let path = require("path");
const { checkFolderExistFromPath } = require("./check-operations");
//Const-vars
const encoding = "utf-8";
let createCheck;
let msg;


/**
 * @description This function responsible for create a directory and returning a boolean value
 * @param {string} dir string type
 */
const createDirectoryFromPath = async (dir) => {
    try {
      createCheck = !checkFolderExistFromPath(dir) ? fs.mkdirSync(dir) : false;
      return createCheck;
    } catch (error) {
      msg = `Error in createDirectoryFromPath() function. Caused by ${error}`;
      console.log(msg);
    }
  };

  
module.exports = {
    createDirectoryFromPath
  };