//--------------------------------------
//* Setup
//--------------------------------------
// Safety Googles ON
'use strict';

// Router Setup
import express from 'express';
const pageRouter = express.Router();

let sendJSON = (response, data) => {
  response.statusCode = 200;
  response.statusMessage = 'OK';
  response.setHeader('Content-Type', 'application/json');
  response.write(JSON.stringify(data));
  response.end();
};

pageRouter.get('/', async (req, res, next) => {
  try {
    sendJSON(res, 'Server Home');
  } catch (err) {
    next();
  }
});

export default pageRouter;
