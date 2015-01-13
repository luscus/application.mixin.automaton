/* jshint node:true */
/* jshint expr:true*/
/* global describe */
/* global it */
'use strict';

require('chai').should();
require('../data/devStates');

var automaton = require('../data/automaton'),
    states    = require('../data/states'),
    injected  = require('../lib/injected'),
    app       = {
      name: 'test'
    };

injected(app);

describe('Injected Object:', function () {

  it('has property states', function () {
    automaton.should.have.property('states');
    automaton.states.should.be.a('object');
  });

  it('has method state', function () {
    automaton.should.have.property('state');
  });

  it('has method changeState', function () {
    automaton.should.have.property('changeState');
    automaton.changeState.should.be.a('function');

    // function takes only 2 parameter
    automaton.changeState.length.should.equal(2);
  });

});


describe('State Change to "start":', function () {

  it('application has a "state" method and it returns "start"', function () {
    automaton.changeState('start');

    app.should.have.property('state');
    app.state().should.equal(automaton.states.start.name);
  });

  it('application has a "startOtherFunc" method', function () {
    app.should.have.property('startOtherFunc');
    app.startOtherFunc.should.be.a('function');
    app.startOtherFunc().should.equal('start.startOtherFunc');
  });

  it('application has a "test" method', function () {
    app.should.have.property('test');
    app.test.should.be.a('function');
    app.test().should.equal('start.test');
  });

});


describe('State Change to "state1" with removed "start" state:', function () {

  it('application has no "startOtherFunc" method', function () {
    app.should.not.have.property('startOtherFunc');
  });

  it('application has a "state" method and it returns "state1"', function () {
    app.should.have.property('state');
    app.state().should.equal(automaton.states.state1.name);
  });

  it('application has a "state1Func" method', function () {
    app.should.have.property('state1Func');
    app.state1Func.should.be.a('function');
    app.state1Func().should.equal('state1.state1Func');
  });

  it('application has a "test" method', function () {
    app.should.have.property('test');
    app.test.should.be.a('function');
    app.test().should.equal('state1.test');
  });

});


describe('State Change to "end" using "start" as state init:', function () {

  it('application has no "state1Func" method', function () {
    app.should.not.have.property('state1Func');
  });

  it('application has a "state" method and it returns "end"', function () {
    app.should.have.property('state');
    app.state().should.equal(automaton.states.end.name);
  });

  it('application has a "startOtherFunc" method', function () {
    app.should.have.property('startOtherFunc');
    app.startOtherFunc.should.be.a('function');
    app.startOtherFunc().should.equal('end.startOtherFunc');
  });

  it('application has a "test" method', function () {
    app.should.have.property('test');
    app.test.should.be.a('function');
    app.test().should.equal('end.test');
  });

  it('application has a "bla" method', function () {
    app.should.have.property('bla');
    app.bla.should.be.a('function');
    app.bla().should.equal('end.bla');
  });

});
