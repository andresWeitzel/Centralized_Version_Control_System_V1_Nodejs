"use strict";
//Functions
const {
  checkFolderExistFromPath,
} = require("../../../../file-system/file-paths/check-operations");
//Const
const MOCK_NUMBER_VALUE = 12;
const MOCK_BOOLEAN_VALUE = true;
const MOCK_STRING_VALUE = "MOCK_STRING_VALUE";
const MOCK_INVALID_DIRECTORY = "f://AVDAV/ASDAD";
const MOCK_VALID_DIRECTORY = "/c/Users";
//Vars
let checkFolderExistFromPathResult;
let mockIdNameValue = "id";
let msg;

describe("- checkFolderExistFromPath function (Unit Test)", () => {
  describe("1) Check cases for arguments.", () => {
    msg =
      "Should return a boolean value if a string type argument is passed (This function expects one argument of type string).";
    it(msg, async () => {
      checkFolderExistFromPathResult = await checkFolderExistFromPath(
        MOCK_STRING_VALUE
      );
      await expect(typeof checkFolderExistFromPathResult == "boolean").toBe(
        true
      );
    });

    msg =
      "Should return a boolean value if a string type with invalid path argument is passed (This function expects one argument of type string).";
    it(msg, async () => {
      checkFolderExistFromPathResult = await checkFolderExistFromPath(
        MOCK_INVALID_DIRECTORY
      );
      await expect(typeof checkFolderExistFromPathResult == "boolean").toBe(
        true
      );
    });

    msg =
      "Should return a boolean value if a string type with valid path argument is passed (This function expects one argument of type string).";
    it(msg, async () => {
      checkFolderExistFromPathResult = await checkFolderExistFromPath(
        MOCK_VALID_DIRECTORY
      );
      await expect(typeof checkFolderExistFromPathResult == "boolean").toBe(
        true
      );
    });

    msg =
      "Should return a boolean value if a number type argument is passed (This function expects one argument of type string).";
    it(msg, async () => {
      checkFolderExistFromPathResult = await checkFolderExistFromPath(
        MOCK_NUMBER_VALUE
      );
      await expect(typeof checkFolderExistFromPathResult == "boolean").toBe(
        true
      );
    });

    msg =
      "Should return a boolean value if a boolean type argument is passed (This function expects one argument of type string).";
    it(msg, async () => {
      checkFolderExistFromPathResult = await checkFolderExistFromPath(
        MOCK_BOOLEAN_VALUE
      );
      await expect(typeof checkFolderExistFromPathResult == "boolean").toBe(
        true
      );
    });

    msg =
      "Should return a boolean value if others arguments are passed (This function expects one argument of type string).";
    it(msg, async () => {
      checkFolderExistFromPathResult = await checkFolderExistFromPath(
        MOCK_BOOLEAN_VALUE,
        MOCK_NUMBER_VALUE,
        MOCK_STRING_VALUE
      );
      await expect(typeof checkFolderExistFromPathResult == "boolean").toBe(
        true
      );
    });

    msg =
      "Should return a boolean value if a null value is passed (This function expects one argument of type string).";
    it(msg, async () => {
      checkFolderExistFromPathResult = await checkFolderExistFromPath(null);
      await expect(typeof checkFolderExistFromPathResult == "boolean").toBe(
        true
      );
    });

    msg =
      "Should return a boolean value if undefined value is passed (This function expects one argument of type string).";
    it(msg, async () => {
      checkFolderExistFromPathResult = await checkFolderExistFromPath(
        undefined
      );
      await expect(typeof checkFolderExistFromPathResult == "boolean").toBe(
        true
      );
    });
                     });

  //   describe("2) Check cases for return cases.", () => {
  //     msg =
  //       "Should return a string type with 'id' value if a 'id' or 'ID' value is passed (This function expects one argument of type string).";
  //     it(msg, async () => {
  //       checkFolderExistFromPathResult = await checkFolderExistFromPath(mockIdNameValue);
  //       await expect(checkFolderExistFromPathResult == "id").toBe(true);
  //       checkFolderExistFromPathResult = await checkFolderExistFromPath(mockIdNameValue.toUpperCase());
  //       await expect(checkFolderExistFromPathResult == "id").toBe(true);
  //     });

  //     msg =
  //       "Should return a string type with 'codigo' value if a 'codigo', 'code', 'CODE' or 'CODIGO' value is passed (This function expects one argument of type string).";
  //     it(msg, async () => {
  //       checkFolderExistFromPathResult = await checkFolderExistFromPath(mockCodeNameValue);
  //       await expect(checkFolderExistFromPathResult == "codigo").toBe(true);
  //       checkFolderExistFromPathResult = await checkFolderExistFromPath(mockCodeNameValue.toUpperCase());
  //       await expect(checkFolderExistFromPathResult == "codigo").toBe(true);
  //       mockCodeNameValue = "code";
  //       checkFolderExistFromPathResult = await checkFolderExistFromPath(mockCodeNameValue);
  //       await expect(checkFolderExistFromPathResult == "codigo").toBe(true);
  //       checkFolderExistFromPathResult = await checkFolderExistFromPath(mockCodeNameValue.toUpperCase());
  //       await expect(checkFolderExistFromPathResult == "codigo").toBe(true);
  //     });

  //     msg =
  //       "Should return a string type with 'nro_pieza' value if a 'NRO_PIEZA', 'nro_pieza', 'nropieza', 'nropart' value is passed (This function expects one argument of type string).";
  //     it(msg, async () => {
  //       checkFolderExistFromPathResult = await checkFolderExistFromPath(mockNroPartNameValue);
  //       await expect(checkFolderExistFromPathResult == mockNroPartNameValue).toBe(true);
  //       checkFolderExistFromPathResult = await checkFolderExistFromPath(
  //         mockNroPartNameValue.toUpperCase()
  //       );
  //       await expect(checkFolderExistFromPathResult == mockNroPartNameValue).toBe(true);
  //       mockNroPartNameValue = "nropart";
  //       checkFolderExistFromPathResult = await checkFolderExistFromPath(mockNroPartNameValue);
  //       console.log(checkFolderExistFromPathResult);
  //       await expect(checkFolderExistFromPathResult == "nro_pieza").toBe(true);
  //       checkFolderExistFromPathResult = await checkFolderExistFromPath(
  //         mockNroPartNameValue.toUpperCase()
  //       );
  //       await expect(checkFolderExistFromPathResult == "nro_pieza").toBe(true);
  //     });

  // -- The number of tests is simplified for each case, add here if necessary --
  //   });

  //   describe("3) Check cases for error.", () => {
  //     msg =
  //       "Should not return a error message if no argument is passed to the function (This function expects one argument of type string).";
  //     it(msg, async () => {
  //       checkFolderExistFromPathResult = await checkFolderExistFromPath();
  //       await expect(async () => checkFolderExistFromPathResult).not.toThrow(Error);
  //     });

  //     msg =
  //       "Should not return a error message if not string argument is passed to the function (This function expects one argument of type string).";
  //     it(msg, async () => {
  //       checkFolderExistFromPathResult = await checkFolderExistFromPath(MOCK_NUMBER_VALUE);
  //       await expect(async () => checkFolderExistFromPathResult).not.toThrow(Error);
  //     });

  //     msg =
  //       "Should not return a error message if a valid argument is passed to the function (This function expects one argument of type string).";
  //     it(msg, async () => {
  //       checkFolderExistFromPathResult = await checkFolderExistFromPath(mockCodeNameValue);
  //       await expect(async () => checkFolderExistFromPathResult).not.toThrow(Error);
  //     });

  //     msg =
  //       "Should not return a error message if a new Error is passed to the function (This function expects one argument of type string).";
  //     it(msg, async () => {
  //       checkFolderExistFromPathResult = await checkFolderExistFromPath(new Error());
  //       await expect(async () => checkFolderExistFromPathResult).not.toThrow(Error);
  //     });
  //   });
});
