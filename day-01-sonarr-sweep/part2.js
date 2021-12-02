module.exports = (input) => {
  const measurements = input.split("\n").map((t) => +t);
  const answer = measurements
    .map((item, i) => {
      if (!measurements[i + 2]) return;
      return item + measurements[i + 1] + measurements[i + 2];
    })
    .reduce((accumulator, item, i, arr) => {
      if (i === 0) return accumulator;
      return item > arr[i - 1] ? accumulator + 1 : accumulator;
    }, 0);
  return answer;
};
