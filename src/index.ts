import net from 'net';

const port = 80;
const server = net.createServer((socket) => {
  const time = new Date().toLocaleString();

  try {
    console.log(`[${time}] Connection from ${socket.remoteAddress}:${socket.remotePort}`);

    socket.on('error', (err) => {
      console.error(`[${time}] Socket Error: ${err}`);
    });

    socket.end();
  } catch (e) {
    console.error(`[${time}] Error: ${e}`);
  }
});

server.listen(port, () => {
  console.log("  ____            _        _    _           _   ");
  console.log(" |  _ \\ ___  _ __| |_     / \\  | | ___ _ __| |_ ");
  console.log(" | |_) / _ \\| '__| __|   / _ \\ | |/ _ \\ '__| __|");
  console.log(" |  __/ (_) | |  | |_   / ___ \\| |  __/ |  | |_ ");
  console.log(" |_|   \\___/|_|   \\__| /_/   \\_\\_|\\___|_|   \\__|");
  console.log("")
  console.log(`by Tim Ritter <t-ritter-mail@web.de>`);
  console.log(`Ready to go - Listening on port ${port}`)
});
