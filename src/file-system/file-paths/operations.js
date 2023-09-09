//External
const fsPromises = require("fs").promises;


const getFilesPathsNames = async (dir) => {
    try {
      return await fsPromises.readdir(dir, (err, files) => {
          files.forEach(file => {
            console.log(file);
          });
        });
    } catch (error) {
      msg = `Error in getFilesNames() function. Caused by ${error}`;
      console.log(msg);
    }
  };

  module.exports = {
    getFilesPathsNames
  };
  