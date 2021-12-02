module.exports = (input) => {
  let depth = 0,
    distance = 0,
    aim = 0;
  input.split("\n").forEach((item) => {
    item = item.trim();
    let num = +item.split(" ")[1];
    switch (item.split(" ")[0]) {
      case "up":
        aim = aim - num;
        break;
      case "down":
        aim = aim + num;
        break;
      case "forward":
        distance = distance + num;
        depth = depth + aim * num;
        break;
    }
  });

  return depth * distance;
};
