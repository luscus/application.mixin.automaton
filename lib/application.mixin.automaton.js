/* jshint node:true */
'use strict';

var loader     = require('./loader'),
    injected   = require('./injected'),
    states     = require('../data/states'),
    app;

exports.apply = function apply (_app) {

  var automaton = injected(_app);

  automaton.changeState('start');
};
