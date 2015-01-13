/* jshint node:true */
'use strict';

var signatureExtender = require('function.signature.extender'),
    automaton         = require('../data/automaton');

function removeOldState (application, state) {

  if (state) {
    var properties = Object.keys(state),
        property;

    properties.forEach(function propertyIterator(propertyName) {
      property = state[propertyName];

      if (typeof property === 'function') {
        delete application[propertyName];
      }
    });
  }
}

function applyTemplate (application, state) {

  if (state) {
    var properties = Object.keys(state),
        property;

    properties.forEach(function propertyIterator (propertyName) {
      property = state[propertyName];

      if (typeof property === 'function') {
        var extendedStateMethod = signatureExtender(property, 'automaton');

        application[propertyName] = function stateMethodWrapper () {
          var extendedArguments = Array.prototype.concat.call([automaton], arguments);

          return extendedStateMethod.apply(application, extendedArguments);
        };
      }
    });
  }
}


module.exports = {
  removeOldState: removeOldState,
  applyTemplate: applyTemplate
};
