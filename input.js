const { CONTROLS } = require('./constants');
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'W' || key === 'A' || key === 'S' || key === 'D') {
    connection.write(`Move: ${CONTROLS[key]}`);
    setTimeout(() => {
      connection.write(`Move: ${CONTROLS[key]}`);
    }, 40);
    setTimeout(() => {
      connection.write(`Move: ${CONTROLS[key]}`);
    }, 80);
  } else {
    connection.write(CONTROLS[key]);
  }
};

module.exports = {
  setupInput
};