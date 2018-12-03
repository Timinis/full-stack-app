// Safety Googles ON
'use strict';
console.clear();

// Dependencies
require('dotenv').config();
require('babel-polyfill');
require('babel-register');
require('./src/app.js');

try {
  require('./src/app.js').start(process.env.PORT);
} catch (e) {
  console.error(e);
}