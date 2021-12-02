module.exports = (input) => {
  const measurements = input.split("\n").map((t) => +t);
  const answer = measurements.reduce((accumulator, item, i, arr) => {
    if (i === 0) return accumulator;
    return item > arr[i - 1] ? accumulator + 1 : accumulator;
  }, 0);
  return answer;
};
