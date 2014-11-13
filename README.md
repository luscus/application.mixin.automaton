# application.mixin.automaton
[![NPM version](https://badge.fury.io/js/application.mixin.automaton.svg)](http://badge.fury.io/js/application.mixin.automaton)
[![dependencies](https://david-dm.org/luscus/application.mixin.automaton.svg)](https://david-dm.org/luscus/application.mixin.automaton)
[![devDependency Status](https://david-dm.org/luscus/application.mixin.automaton/dev-status.svg?theme=shields.io)](https://david-dm.org/luscus/application.mixin.automaton#info=devDependencies)

[Application Framework](https://github.com/luscus/application.skeleton) Mixin: transforms the application into an [Automaton (state machine)](http://en.wikipedia.org/wiki/Automata_theory).

Depending on the concept you want to follow ([Automata-based](http://en.wikipedia.org/wiki/Automata-based_programming), [Event-Driven](http://en.wikipedia.org/wiki/Event-driven_finite-state_machine), [Virtual](http://en.wikipedia.org/wiki/Virtual_finite-state_machine)), the change of the state will be triggered automaticly by data, events,...


## Directory Structure

At the package directory root a folder "states" has to exist.

Each state itself must be reflected into a subfolder and JavaScript file:

    <package-root>
          |_ states
               |_ start
               |     |_ start.js
               |_ <state-A>
               |     |_ <state-A>.js
               |_ <state-B>
               |     |_ <state-B>.js
              ...
               |_ stop
                     |_ stop.js

Uppon load, the mixin will scrawl and register all defined states in this structure.

## Reserved states

- `start` (mandatory): triggered immediatly after the initalisation of the application.

- `stop` (optional): Will lead to the stop of the application: `process.exit()`

## Added Properties and Methods

### Method "state"

Returns the name of the current state.


## Usage

Your application project has to build upon the [application.skeleton](https://github.com/luscus/application.skeleton) and you only have to set the new dependency:

    npm install application.mixin.automaton --save

The `application.skeleton` will do all the work adding the Mixins as this one.

Simply use the new functionality:

    {
      state: <function>
    }

--------------
Copyright (c) 2014 Luscus (luscus.redbeard@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
