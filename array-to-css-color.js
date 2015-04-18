module.exports = arrayToCSSColor;

var tmp = [0, 0, 0, undefined];

function dor(a, d) {
  if (a === false || a === null || typeof a === 'undefined') {
    return d;
  }
  return a;
}

function percent(a) {
  if (a && a.indexOf && a.indexOf('%') > -1) {
    return a;
  }

  return (parseFloat(a) * 100) + '%';
}

function arrayToCSSColor(a, prefix) {
  prefix = prefix || '';
  var l = Math.min(4, prefix.length);

  if (!l) {
    return 'rgb(0, 0, 0)';
  }

  // trim the prefix if it's over length
  if (l !== prefix.length) {
    prefix = prefix.substring(0, l);
  }

  a = a || tmp;

  var ret = prefix.replace('(', '') + '('
  ret += dor(a[0], 0) + ', ';

  var c1 = dor(a[1], 0);
  var c2 = dor(a[2], 0);

  if (prefix.indexOf('hs') > -1) {
    c1 = percent(c1);
    c2 = percent(c2);
  }

  ret += c1 + ', ' + c2

  if (l === 4) {
    ret += ', ' + dor(a[3], 1);
  }

  return ret + ')';
}
