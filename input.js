// Stores the active TCP connection object.
let connection;

const handleUserInput = function(input) {
  if (input === '\u0003') process.exit();
  else if (input === 'w') connection.write("Move: up");
  else if (input === 's') connection.write("Move: down");
  else if (input === 'a') connection.write("Move: left");
  else if (input === 'd') connection.write("Move: right");
  else if (input === 'q') connection.write("Say: 😠");
};

const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = { setupInput };

  // "Move: up" - move up one square (unless facing down)
  // "Move: down" - move down one square (unless facing up)
  // "Move: left" - move left one square (unless facing right)
  // "Move: right" - move left one square (unless facing left)