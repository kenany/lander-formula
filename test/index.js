'use strict';

const test = require('tape');
const isFunction = require('lodash.isfunction');
const almostEqual = require('almost-equal');

const lander = require('../');

test('exports a function', (t) => {
  t.plan(1);
  t.ok(isFunction(lander));
});

test('100 for 10', (t) => {
  t.plan(1);
  t.ok(lander(100, 10), 133);
});

test('100 for 6', (t) => {
  t.plan(1);
  t.ok(almostEqual(lander(100, 6), 117, 1));
});
