/* jshint node:true */
/* jshint expr:true*/
/* global describe */
/* global it */
'use strict';

require('chai').should();

var Fs      = require('fs'),
    Path    = require('path'),
    root    = require('package.root'),
    states  = require('../data/devStates'),
    devMode = require('../data/devMode'),
    loader  = require('../lib/loader');

describe('Loader:', function () {

  it('has property "stateDirectory"', function () {
    loader.should.have.property('stateDirectory');
    loader.stateDirectory.should.be.a('string');

    var path;

    if (devMode) {
      path = Path.normalize(root.path + Path.sep + '..' + Path.sep + 'states');
    }
    else {
      path = Path.normalize(root.path + Path.sep + 'states');
    }

    loader.stateDirectory.should.equal(path);
  });

  it('has property "stateNames"', function () {
    loader.should.have.property('stateNames');
    loader.stateNames.should.be.a('array');
    loader.stateNames.should.deep.equal(Object.keys(states));
  });

});
