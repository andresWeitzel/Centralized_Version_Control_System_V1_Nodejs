const fsPromises = require("fs").promises;
const path = require("path");
const archiveName = "../temp/files/example.txt";
const encoding = "utf-8";

const readData = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, archiveName),
      encoding
    );
    console.log(data);
    return data;
  } catch (error) {
    msg = `Error in readData() function. Caused by ${error}`;
    console.log(msg);
  }
};


module.exports = {
  readData,
};
