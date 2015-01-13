/* jshint node:true */
/* jshint expr:true*/
/* global describe */
/* global it */
'use strict';

require('chai').should();

var automaton = require('../lib/application.mixin.automaton'),
    app       = {
      name: 'test'
    };


describe('Automaton initialisation:', function () {

  it('automaton library has an "apply" method', function () {
    automaton.should.have.property('apply');
    automaton.apply.should.be.a('function');

    // function takes only 1 parameter
    automaton.apply.length.should.equal(1);
  });

  automaton.apply(app);


  it('application has a "state" method and it returns "start"', function () {
    app.should.have.property('state');
    app.state().should.equal('start');
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
