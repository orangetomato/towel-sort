module.exports = function towelSort(matrix) {
  if (!matrix || !matrix.length) {
    return [];
  }
  let result = matrix[0];
  for (let i = 1; i < matrix.length; i++) {
    if (i % 2) {
      matrix[i].reverse();
    }
    result = result.concat(matrix[i]);
  }
  return result;
}
