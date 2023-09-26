//External
const fsPromises = require("fs/promises");
const fs = require("fs");
//File-System
const {checkFolderExistFromPath} = require("./check-operations");
//Const-vars
let path = require("path");
const encoding = "utf-8";
let createCheck;
let checkDir;
let msg;

// /**
//  * @description This function responsible for create a directory and returning a boolean value
//  * @param {string} dir string type
//  */
// const createDirectoryFromPath = async (dir) => {
//     try {
//       createCheck = !checkFolderExistFromPath(dir) ? fs.mkdirSync(dir) : false;
//       return createCheck;
//     } catch (error) {
//       msg = `Error in createDirectoryFromPath() function. Caused by ${error}`;
//       console.log(msg);
//     }
//   };

const copyDirsFromPath = async (fromDir, toDir) => {
  try {
    checkDir = await checkFolderExistFromPath(fromDir);
    if (!checkDir) {
      return false;
    }
    return fs.cp(fromDir, toDir, { recursive: true }, (err) => {
      if (err) {
        console.error(err);
        return false;
      }
    });
  } catch (error) {
    msg = `Error in copyDirsFromPath() function. Caused by ${error}`;
    console.log(msg);
  }
};

module.exports = {
  // createDirectoryFromPath,
  copyDirsFromPath
};
