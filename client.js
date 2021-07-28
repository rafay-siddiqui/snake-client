const { builtinModules } = require("module");
const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });

  // interpret incoming data as text
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