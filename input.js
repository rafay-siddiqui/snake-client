let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  const controls = {
    w: 'up',
    a: 'left',
    s: 'down',
    d: 'right',
    W: 'up',
    A: 'left',
    S: 'down',
    D: 'right'
  };
  if (key === '\u0003') {
    process.exit();
  } else if (key == 'W' || key == 'A' || key == 'S' || key == 'D') {
    connection.write(`Move: ${controls[key]}`);
    setTimeout(() => {connection.write(`Move: ${controls[key]}`)},30);
    setTimeout(() => {connection.write(`Move: ${controls[key]}`)},60);
  } else {
    connection.write(`Move: ${controls[key]}`);
  }
};

module.exports = {
  setupInput
};