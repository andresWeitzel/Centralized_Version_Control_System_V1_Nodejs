//File System
const { copyDirsFromPath } = require("../../file-system/file-paths/create-operations");
//Const-vars
let directoryPathFrom;
let directoryPathTo;
let checkDirs;

const copyDirsFromPathService = async (req, res) => {
    try {
      directoryPathFrom = req.body?.directory_path_from;
      directoryPathTo = req.body?.directory_path_to;
      checkDirs =
        (directoryPathFrom != (null || undefined) && directoryPathTo != (null || undefined))
          ? await copyDirsFromPath(directoryPathFrom, directoryPathTo)
          : null;
      return checkDirs;
    } catch (error) {
      msg = `Error in copyDirsFromPathService  () function. Caused by ${error}`;
      console.log(msg);
    }
  };


  module.exports = {
    copyDirsFromPathService
  };