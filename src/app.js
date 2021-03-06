//--------------------------------------
//* Setup
//--------------------------------------
// Safety Googles ON
'use strict';

// Dependencies
import cors from 'cors';
import express from 'express';
import pageRouter from './api/page-router.js';

// Start Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // json parser
app.use(pageRouter);

//--------------------------------------
//* Start Server
//--------------------------------------
let isRunning = false;
module.exports = {
  app, // es6 syntax

  start: port => {
    if (!isRunning) {
      app.listen(port, err => {
        if (err) {
          throw err;
        }
        isRunning = true;
        console.log('Connected to WEB server on port:', port);
      });
    } else {
      console.log('Server is already running');
    }
  },

  stop: () => {
    app.close(() => {
      isRunning = false;
      console.log('Server has been stopped');
    });
  }
};
