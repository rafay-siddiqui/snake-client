const { builtinModules } = require("module");
const net = require("net");
const { IP, PORT, NAME } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Server connection successful");
    conn.write(NAME);
  });

  conn.on('data', (data) => {
    console.log("Server: ", data);
  });

  return conn;

};

module.exports = {
  connect
};