import { Server } from "Socket.IO";

function SocketHandler(req, res) {
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
  }

  
  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  io.on('connection', socket => {
    console.log('Someone connected with canal connection');
    socket.emit("connection acceptée");
  });

  io.on("message", function(socket, message : string) {
    console.log("j'ai reçu : ", message);
  });

}

export default SocketHandler;
