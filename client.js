const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '172.46.2.204',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log('Connected');
    conn.write('Name: JJR');
    // for (let i = 1; i < 10; i++) {
    //   setInterval(() => conn.write("Move: up"), i * 1000);
    // }
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // "Move: up" - move up one square (unless facing down)
  // "Move: down" - move down one square (unless facing up)
  // "Move: left" - move left one square (unless facing right)
  // "Move: right" - move left one square (unless facing left)

  return conn;
}

module.exports = { connect };