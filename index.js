module.exports = function (initial, mod) {
  initial = new Date(initial);
  return function(date) {
    date = new Date(date);
    var elapsed = Math.floor((date - initial) / 86400000); // 1000 * 60 * 60 * 24
    return fixed_module(elapsed, mod);
  };
};

function fixed_module (number, modulo) {
  var residue = number % modulo;
  return residue >= 0 ? residue : residue + modulo;
};
