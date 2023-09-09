//External
require("dotenv").config();

const getAllVersionerController = async (req, res) => {
  try {
    let arrayVersions = [];
    for (let i=0; i<=100; i++) {
        arrayVersions.push(`v1.0.${i}`);
      }
    code = 200;
    res.status(code).send(arrayVersions);
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
