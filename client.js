const { builtinModules } = require("module");
const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });

  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Server connection successful")
    conn.write('Name: RAF');
  })

  conn.on('data', (data) => {
    console.log("Server: ", data)
  })

  return conn;

};

module.exports = {
  connect
};