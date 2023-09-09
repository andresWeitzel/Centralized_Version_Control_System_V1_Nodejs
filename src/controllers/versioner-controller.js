//External
require("dotenv").config();

const getAllVersionerController = async (req, res) => {
  try {
    let arrayVersions = [];
    for (let i of 100) {
      arrayVersions.push(`v1.0.${i}`);
    }
    return arrayVersions;
  } catch (error) {
    code = 400;
    msg = `Error in getAllVersionerController() function. Caused by ${error}`;
    console.log(msg);
    res.status(code).send(msg);
  }
};

module.exports = {
  getAllVersionerController
};
