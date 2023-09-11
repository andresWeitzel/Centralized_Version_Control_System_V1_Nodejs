//External
const fs = require("fs/promises");
//Const-vars
const encoding = "utf-8";

const getFileDataFromPath = async (dir) => {
  try {
    const data = await fs.readFile(dir, encoding);
    console.log(data);
    return data;
  } catch (error) {
    msg = `Error in getFileDataFromPath() function. Caused by ${error}`;
    console.log(msg);
  }
};

const getFilesNamesFromPath = async (dir) => {
  try {
    return await fs.readdir(dir, (err, files) => {
      files.forEach((file) => {
        console.log(file);
      });
    });
  } catch (error) {
    msg = `Error in getFilesNamesFromPath() function. Caused by ${error}`;
    console.log(msg);
  }
};

const getFileStatsFromPath = async (dir) => {
  try {
    return await fs.stat(dir, (err, stats) => {
      stats.forEach((stat) => {
        console.log(stat);
      });
    });
  } catch (error) {
    msg = `Error in getFileStatsFromPath() function. Caused by ${error}`;
    console.log(msg);
  }
};

module.exports = {
  getFileDataFromPath,
  getFilesNamesFromPath,
  getFileStatsFromPath
};
