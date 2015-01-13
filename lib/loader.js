/* jshint node:true */
'use strict';

var Fs             = require('fs'),
    Path           = require('path'),
    devMode        = require('../data/devMode'),
    states         = require('../data/states'),
    stateDirectory = Path.normalize(__dirname + Path.sep + '..' + Path.sep + '..' + Path.sep + 'states'),
    stateNames;



function load () {

  if (devMode) {
    console.log('devMode active...');

    loadDevStates();
  }
  else {

    if (!Fs.existsSync(stateDirectory)) {
      throw new Error('no states directory found at ' + stateDirectory);
    }

    if (!stateNames) {
      stateNames = [];

      var files = Fs.readdirSync(stateDirectory),
          stats;

      files.forEach(function fileIterator(filePath) {
        stats = Fs.statSync(filePath);

        if (stats.isDirectory()) {
          var stateName = Path.basename(filePath);

          stateNames.push(stateName);
          init(filePath);
        }
      });
    }
  }

  return stateNames;
}

function loadDevStates () {
  var devStates = require('../data/devStates');

  stateNames = Object.keys(devStates);

  stateNames.forEach(function stateIterator (stateName) {
    states[stateName] = devStates[stateName];
  });
}

function init (filePath) {
  var stateName = Path.basename(filePath),
      statePath = filePath + Path.sep + stateName;

  if (Fs.existsSync(statePath)) {
    states[stateName] = require(statePath);
  }
  else {
    throw new Error('no ' + statePath + '.js file found at ' + filePath);
  }
}

// auto load states
load();


exports.stateDirectory = stateDirectory;
exports.stateNames     = stateNames;
exports.load           = load;
exports.init           = init;
