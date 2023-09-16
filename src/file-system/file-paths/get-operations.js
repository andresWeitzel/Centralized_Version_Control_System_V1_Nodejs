//External
const fsPromises = require("fs/promises");
const fs = require("fs");
let path = require("path");
//Const-vars
const encoding = "utf-8";
let msg;
let data;
let extension;

//Add operations
/**
 * @description This function responsible for asynchronously reads the entire contents of a file
 * @param {string} dir string type
 */
const getFileDataFromPath = async (dir) => {
  try {
    data = await fsPromises.readFile(dir, encoding);
    console.log(data);
    return data;
  } catch (error) {
    msg = `Error in getFileDataFromPath() function. Caused by ${error}`;
    console.log(msg);
  }
};

/**
 * @description This function responsible for asynchronously read the contents of a given directory and returns an array of all the file names in the directory
 * @param {string} dir string type
 */
const getFilesNamesFromPath = async (dir) => {
  try {
    return await fsPromises.readdir(dir, (err, files) => {
      files.forEach((file) => {
        console.log(file);
      });
    });
  } catch (error) {
    msg = `Error in getFilesNamesFromPath() function. Caused by ${error}`;
    console.log(msg);
  }
};

/**
 * @description This function responsible for obtaining information about the given file or directory.
 * @param {string} dir string type
 */
const getFileStatsFromPath = async (dir) => {
  try {
    return await fsPromises.stat(dir, (err, stats) => {
      stats.forEach((stat) => {
        console.log(stat);
      });
    });
  } catch (error) {
    msg = `Error in getFileStatsFromPath() function. Caused by ${error}`;
    console.log(msg);
  }
};

/**
 * @description This function responsible for obtaining an object whose properties represent significant elements of the path
 * @param {string} dir string type
 */
const getFileExtensionsFromPath = async (dir) => {
  try {
    extension = path.extname(dir);
    console.log(extension);
    return extension;
  } catch (error) {
    msg = `Error in getFileExtensionsFromPath() function. Caused by ${error}`;
    console.log(msg);
  }
};

/**
 * @description This function responsible for obtaining an object whose properties represent significant elements of the path
 * @param {string} dir string type
 */
const getFileElementsFromPath = async (dir) => {
  try {
    extension = path.parse(dir);
    console.log(extension);
    return extension;
  } catch (error) {
    msg = `Error in getFileElementsFromPath() function. Caused by ${error}`;
    console.log(msg);
  }
};



module.exports = {
  getFileDataFromPath,
  getFilesNamesFromPath,
  getFileStatsFromPath,
  getFileExtensionsFromPath,
  getFileElementsFromPath,
};
