/* jshint node:true */
'use strict';

var states = require('../data/states');

states.start = {
  test: function test () {
    var result = this.state()+'.test';

    automaton.changeState('state1');
    return result;
  },
  startOtherFunc: function startOtherFunc () {
    return this.state()+'.startOtherFunc';
  }
};

states.state1 = {
  test: function test () {
    var result = this.state()+'.test';

    automaton.changeState('state2', automaton.states.start);
    return result;
  },
  state1Func: function state1Func () {
    return this.state()+'.state1Func';
  }
};

states.state2 = {
  test: function test () {
    return this.state()+'.test';
  },
  bla: function bla () {
    var result = this.state()+'.bla';

    automaton.changeState('end');
    return result;
  }
};

module.exports = states;
