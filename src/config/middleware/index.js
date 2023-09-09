//External
const express = require("express");
let morgan = require("morgan");
let cors = require("cors");
//Env vars
const VERSIONER_BASE_URL = process.env.API_VERSIONER_LOCAL_BASE_URL;
const VERSIONER_ENDPOINT = process.env.API_VERSIONER_ENDPOINT_NAME_URL;
//Config router
const versionerRouter = require("../routes/versioner-routes");

/**
 * @description initial settings for cors, express, etc (Middleware)
 * @returns an express object with the initial settings
 */
const appMiddleware = async () => {
  try {
    const app = express();

    //Using morgan-middleware
    app.use(morgan("dev"));

    //-- start cors --
    //Set cors
    var corsOptions = {
      origin: VERSIONER_BASE_URL
    };
    //Use cors options
    app.use(cors(corsOptions));
    //-- end cors --

    //-- start config for data api --
    //Use express with json format
    app.use(express.json());

    //Only fort strict format configured
    app.use(express.urlencoded({ extended: true }));
    //-- end config for data api --

    //-- start with routes --
    app.use(VERSIONER_ENDPOINT, versionerRouter);
    //-- end with routes --

    return app;
  } catch (error) {
    console.log(`Error in appMiddleware() function. Caused by ${error}`);
  }
};

module.exports = {
  appMiddleware
};
