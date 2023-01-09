import { Server, Socket } from "Socket.IO";

function SocketHandler(req, res) {
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
  }

  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  io.on("connection", (userSocket) => {
    console.log("Someone connected with canal connection");
    userSocket.emit("connection acceptée");
  });

  //When a client click on a conversation, his sockets joins a room with the id of the conversation
  io.on("join conversation", (userSocket: Socket, conversationId: string) => {
    userSocket.join(conversationId);
  });

  /**
   * sends a message to all userSockets in a room but the sender
   * @message : the message to send, shall be an object containing
   * the content, the sender and the conversation id
   */
  io.on("message", (userSocket, conversationId: string, message: string) => {
    console.log(
      `envoie message "${message} par userSocket ${userSocket} sur conversation ${conversationId}`
    );
    userSocket.in(conversationId).emit("message", message);
  });
}

export default SocketHandler;
