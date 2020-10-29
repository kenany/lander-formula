var test = require('tape');
var isFunction = require('lodash.isfunction');
var almostEqual = require('almost-equal');

var lander = require('../');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(lander));
});

test('100 for 10', function(t) {
  t.plan(1);
  t.ok(lander(100, 10), 133);
});

test('100 for 6', function(t) {
  t.plan(1);
  t.ok(almostEqual(lander(100, 6), 117, 1));
});
