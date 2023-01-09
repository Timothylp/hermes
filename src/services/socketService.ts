import { io, Socket } from "socket.io-client";

//marche pas il faut une manière de gérer le state du socket
let socket: Socket | undefined;

export const socketInitializer = () => {
  console.log("socketInitializer");
  fetch("/api/socket").then(() => {
    socket = io();

    socket.on("connection", (message) => {
      console.log("message de la connexion : ", message);
    });

    socket.on("message", (message: string) => {
      console.log("message reçu : ", message);
    });
  });
};

export const joinConversation = async (idConversation: string) => {
  console.log("appel join conversation, idConversation : ", idConversation);
  socket?.emit("joinConversation", idConversation);
};

export const sendMessage = (message: string) => {
  console.log("appel service socket");
  console.log(socket);
  socket?.emit("message", message);
};
