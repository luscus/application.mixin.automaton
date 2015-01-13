/* jshint node:true */
/* jshint expr:true*/
/* global describe */
/* global it */
'use strict';

require('chai').should();
require('../data/devStates');

var tools  = require('../lib/tools'),
    states = require('../data/states'),
    app    = {
      name: 'test'
    };


describe('State Tools:', function () {

  it('tools have method removeOldState', function () {
    tools.should.have.property('removeOldState');
    tools.removeOldState.should.be.a('function');

    // function takes only 2 parameter
    tools.removeOldState.length.should.equal(2);
  });

  it('tools have method applyTemplate', function () {
    tools.should.have.property('applyTemplate');
    tools.applyTemplate.should.be.a('function');

    // function takes only 2 parameter
    tools.applyTemplate.length.should.equal(2);
  });

  it('app should have startOtherFunc method', function () {
    tools.applyTemplate(app, states.start);

    app.should.have.property('startOtherFunc');
    app.startOtherFunc.should.be.a('function');
  });

  it('app should have test method', function () {
    tools.applyTemplate(app, states.start);

    app.should.have.property('test');
    app.test.should.be.a('function');
  });

  it('name property should not have been overwritten', function () {
    tools.applyTemplate(app, states.start);

    app.should.have.property('name');
    app.name.should.equal('test');
  });

  it('startOtherFunc method should have been removed', function () {
    tools.removeOldState(app, states.start);

    app.should.not.have.property('startOtherFunc');
  });

  it('test method should have been removed', function () {
    tools.removeOldState(app, states.start);

    app.should.not.have.property('test');
  });

  it('name property should not have been overwritten', function () {
    tools.removeOldState(app, states.start);

    app.should.have.property('name');
    app.name.should.equal('test');
  });

  it('on empty state argument no changes are been made to application', function () {

    // check on apply
    var propertiesBefore = Object.keys(app);

    tools.applyTemplate(app);

    var propertiesAfter = Object.keys(app);

    propertiesBefore.should.deep.equal(propertiesAfter);

    // check on remove
    propertiesBefore = Object.keys(app);

    tools.removeOldState(app);

    propertiesAfter = Object.keys(app);

    propertiesBefore.should.deep.equal(propertiesAfter);
  });

});
