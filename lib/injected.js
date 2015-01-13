/* jshint node:true */
'use strict';

var automaton = require('../data/automaton'),
    states    = require('../data/states'),
    tools     = require('./tools'),
    application;

automaton.states      = states;
automaton.state       = null;
automaton.changeState = changeState;


function changeState (stateName, initTemplate) {
  initTemplate = initTemplate || {};

  if (states[stateName]) {
    tools.removeOldState(application, automaton.state);


    automaton.state      = states[stateName];
    automaton.state.name = stateName;

    tools.applyTemplate(application, initTemplate);
    tools.applyTemplate(application, automaton.state);

    application.state = function state () {
      return automaton.state.name;
    };
  }
  else {
    throw new Error('State "' + stateName + '" does not exist');
  }
}

module.exports = function (_app) {
  application = _app;

  return automaton;
};
