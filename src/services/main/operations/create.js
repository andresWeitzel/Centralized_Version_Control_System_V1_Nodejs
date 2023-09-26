// //Const-vars
// let basePath="";
//Helpers
const { checkFolderExistFromPath } = require("../../../helpers/file-system/file-paths/check-operations");

const createVersion = async (dirFrom, dirTo) => {
    try {
        let check = await checkFolderExistFromPath(dirFrom);
    } catch (error) {
      msg = `Error in getFileDataFromPath() function. Caused by ${error}`;
      console.log(msg);
    }
  };

  module.exports={
    createVersion
  }