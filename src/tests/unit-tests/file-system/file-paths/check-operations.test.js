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
const MOCK_VALID_DIRECTORY =
  "/Users/andre/OneDrive/Escritorio/LenguajesProgramacion/NodeJs/Proyectos2023/Software_Versioner";
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

  describe("2) Check cases for return value.", () => {
    msg =
      "Should return a boolean true value if a string type with valid path argument is passed (This function expects one argument of type string).";
    it(msg, async () => {
      checkFolderExistFromPathResult = await checkFolderExistFromPath(
        MOCK_VALID_DIRECTORY
      );
      await expect(checkFolderExistFromPathResult == true).toBe(true);
    });

    msg =
      "Should return a boolean false value if a string type with invalid path argument is passed (This function expects one argument of type string).";
    it(msg, async () => {
      checkFolderExistFromPathResult = await checkFolderExistFromPath(
        MOCK_INVALID_DIRECTORY
      );
      await expect(checkFolderExistFromPathResult == false).toBe(true);
    });
  });

  describe("3) Check cases for error.", () => {
    msg =
      "Should not throw an error if a new Error() is passed as a parameter (This function expects one argument of type string).";
    it(msg, async () => {
      checkFolderExistFromPathResult = await checkFolderExistFromPath(
        new Error()
      );
      await expect(async () => checkFolderExistFromPathResult).not.toThrow(
        Error
      );
    });

    msg =
      "Should not throw an error if not values are passed as a parameter (This function expects one argument of type string).";
    it(msg, async () => {
      checkFolderExistFromPathResult = await checkFolderExistFromPath();
      await expect(async () => checkFolderExistFromPathResult).not.toThrow(
        Error
      );
    });

    msg =
      "Should not throw an error if a number type is passed as a parameter (This function expects one argument of type string).";
    it(msg, async () => {
      checkFolderExistFromPathResult = await checkFolderExistFromPath(
        MOCK_NUMBER_VALUE
      );
      await expect(async () => checkFolderExistFromPathResult).not.toThrow(
        Error
      );
    });

    msg =
      "Should return a boolean type if a new Error() value is passed (This function expects one argument of type string).";
    it(msg, async () => {
      checkFolderExistFromPathResult = await checkFolderExistFromPath(
        new Error()
      );
      await expect(typeof checkFolderExistFromPathResult == "boolean").toBe(
        true
      );
    });
  });
});
