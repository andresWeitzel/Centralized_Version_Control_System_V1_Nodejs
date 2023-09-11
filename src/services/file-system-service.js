//File-system
const { getFilesNamesFromPath, getFileStatsFromPath, getFileDataFromPath } = require("../file-system/file-paths/operations");
//Const-vars
let msg;
let directoryPath;
let fileData;
let fileNames;
let fileStats;

const getFileDataFromPathService = async (req, res) => {
  try {
    directoryPath = req.body?.directory_path;
    fileData = (directoryPath != (null || undefined)) ? await getFileDataFromPath(directoryPath) : null;
    return fileData;
  } catch (error) {
    msg = `Error in getFileDataFromPathService() function. Caused by ${error}`;
    console.log(msg);
  }
};

const getFilesNamesFromPathService = async (req, res) => {
    try {
      directoryPath = req.body?.directory_path;
      fileNames = (directoryPath != (null || undefined)) ? await getFilesNamesFromPath(directoryPath) : null;
      return fileNames;
    } catch (error) {
      msg = `Error in getFilesNamesFromPathService() function. Caused by ${error}`;
      console.log(msg);
    }
  };

  const getFileStatsFromPathService = async (req, res) => {
    try {
      directoryPath = req.body?.directory_path;
      fileStats = (directoryPath != (null || undefined)) ? await getFileStatsFromPath(directoryPath) : null;
      return fileStats;
    } catch (error) {
      msg = `Error in getFileStatsFromPathService() function. Caused by ${error}`;
      console.log(msg);
    }
  };
  
  module.exports = {
    getFileDataFromPathService,
    getFilesNamesFromPathService,
    getFileStatsFromPathService
  };