var test = require('tape');
var dma = require('..');

var clasifier = dma(new Date('2015-05-14'), 10);

test('initial date is allways class 0', function(t) {
  t.plan(3);
  t.equal(clasifier(new Date('2015-05-14')), 0);
  t.equal(clasifier(new Date('2015-05-14T23:50')), 0);
  t.equal(clasifier(new Date('2015-05-14T00:10')), 0);
});

test('next day is class 1', function(t) {
  t.plan(1);
  t.equal(clasifier(new Date('2015-05-15')), 1);
});

test('previous day is class 9', function(t) {
  t.plan(1);
  t.equal(clasifier(new Date('2015-05-13')), 9);
});
