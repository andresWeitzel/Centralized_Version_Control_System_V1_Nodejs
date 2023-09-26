const { checkFolderExistFromPath } = require("../../helpers/file-system/file-paths/check-operations");


const checkFolderExistFromPathService = async (req, res) => {
    try {
      directoryPath = req.body?.directory_path;
      check =
        directoryPath != (null || undefined)
          ? await checkFolderExistFromPath(directoryPath)
          : null;
      return check;
    } catch (error) {
      msg = `Error in checkFolderExistFromPathService  () function. Caused by ${error}`;
      console.log(msg);
    }
  };


  module.exports = {
    checkFolderExistFromPathService
  };
  