//--------------------------------------
//* Setup
//--------------------------------------
// Safety Googles ON
'use strict';

// Router Setup
import express from 'express';
const pageRouter = express.Router();

pageRouter.get('/', async (req, res, next) => {
  try {
    res.send('Server Home');
  } catch (err) {
    next();
  }
});

export default pageRouter;
