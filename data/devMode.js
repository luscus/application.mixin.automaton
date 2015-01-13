/* jshint node:true */
'use strict';

var root = require('package.root'),
    info = require('../package.json');

module.exports = (root.name === info.name ? true : false);
