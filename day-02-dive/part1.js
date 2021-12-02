module.exports = (input) => {
  let depth = 0,
    distance = 0;
  input.split("\n").forEach((item) => {
    item = item.trim();
    switch (item.split(" ")[0]) {
      case "up":
        depth = depth - item.split(" ")[1] * 1;
        break;
      case "down":
        depth = depth + +item.split(" ")[1];
        break;
      case "forward":
        distance = distance + +item.split(" ")[1];
        break;
    }
  });

  return depth * distance;
};
