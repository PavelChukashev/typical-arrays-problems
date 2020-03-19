const numArray = (array) => {
  return (!array || !array.length);
}

exports.min = function min (array) {
  return (numArray(array)) ? 0 : Math.min(...array);
}

exports.max = function max (array) {
  return (numArray(array)) ? 0 : Math.max(...array);
}

exports.avg = function avg (array) {
  return array && array.length ? array.reduce((sum, num) => sum + num) / array.length : 0;
}
