# lander-formula

[![Build Status][travis-svg]][travis]

[Lander's formula][1] for one-repetition maximum.

## Example

``` javascript
var lander = require('lander-formula');

lander(100, 6);
// => 117
```

## Installation

``` bash
$ npm install lander-formula
```

## API

``` javascript
var lander = require('lander-formula');
```

### `lander(weight, reps)`

Given _Number_ `weight` and _Number_ `reps`, returns the one-repetition maximum
according to Lander's formula as a _Number_.


   [1]: https://en.wikipedia.org/wiki/One-repetition_maximum#Lander
   [travis]: https://travis-ci.org/KenanY/lander-formula
   [travis-svg]: https://img.shields.io/travis/KenanY/lander-formula.svg
