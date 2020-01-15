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

  return conn;
}

module.exports = { connect };