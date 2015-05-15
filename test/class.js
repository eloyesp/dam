var test = require('tape');
var dma = require('..');

var clasifier = dma('2015-05-14T00:00-0300', 10);

test('initial date is allways class 0', function(t) {
  t.plan(3);
  t.equal(clasifier('2015-05-14T00:00-0300'), 0);
  t.equal(clasifier('2015-05-14T23:50-0300'), 0);
  t.equal(clasifier('2015-05-14T00:10-0300'), 0);
});

test('date can be anything understood by Date', function(t) {
  t.plan(3);
  t.equal(clasifier(new Date('2015-05-14T00:00-0300')), 0);
  t.equal(clasifier('2015-05-14T23:50-0300'), 0);
  t.equal(clasifier((new Date('2015-05-14T00:00-0300')).getTime()), 0);
});

test('next day is class 1', function(t) {
  t.plan(1);
  t.equal(clasifier('2015-05-15T00:00-0300'), 1);
});

test('previous day is class 9', function(t) {
  t.plan(1);
  t.equal(clasifier('2015-05-13T20:00-0300'), 9);
});
