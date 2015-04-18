var css = require('./array-to-css-color');
var test = require('tape');

test('rgb', function(t) {
  t.equal(
    css([0, 0, 0, 1], 'rgba'),
    'rgba(0, 0, 0, 1)'
  );

  t.equal(
    css([255, 0, 0, 1], 'rgba'),
    'rgba(255, 0, 0, 1)'
  );

  t.equal(
    css([0, 255, 0, 1], 'rgba'),
    'rgba(0, 255, 0, 1)'
  );

  t.equal(
    css([0, 0, 255, 1], 'rgba'),
    'rgba(0, 0, 255, 1)'
  );

  t.equal(
    css([0, 0, 255, 1], 'rgb'),
    'rgb(0, 0, 255)'
  );

  t.end();
});

test('hsl', function(t) {
  t.equal(
    css([0, 1, .5, 1], 'hsl'),
    'hsl(0, 100%, 50%)'
  );

  t.equal(
    css([0, .75, .25, 1], 'hsla'),
    'hsla(0, 75%, 25%, 1)'
  );

  t.equal(
    css([0, '75%', '25%', 1], 'hsla'),
    'hsla(0, 75%, 25%, 1)'
  );

  t.end();
});


test('intelligence', function(t) {
  t.equal(
    css([0, 0, 255], 'rgba'),
    'rgba(0, 0, 255, 1)'
  );

  t.end();
});

test('degenerates', function(t) {
  t.equal(
    css(null, 'rgba'),
    'rgba(0, 0, 0, 1)'
  );

  t.equal(
    css([], 'rgba'),
    'rgba(0, 0, 0, 1)'
  );

  t.equal(
    css([255], 'rgba'),
    'rgba(255, 0, 0, 1)'
  );

  t.equal(
    css([255, 255], 'rgba'),
    'rgba(255, 255, 0, 1)'
  );

  t.equal(
    css([255, 255], 'rgbaa'),
    'rgba(255, 255, 0, 1)'
  );

  t.equal(
    css([255, 255]),
    'rgb(0, 0, 0)'
  );


  t.end();
});
