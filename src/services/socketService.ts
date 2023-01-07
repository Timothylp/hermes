import { io, Socket } from "socket.io-client";

let socket: Socket | undefined;

export const socketInitializer = async () => {
  await fetch("/api/socket");
  socket = io();

  socket.on("connect", () => {
    console.log("connected");
  });

  socket.emit("connect");
};

// export const recieveMessage(){
//     socket?.on("message", (message : Message, idConversation : number)=>{
//     });
// }

export const sendSocketMessage = (message: string) => {
  console.log("appel service socket");
  socket?.emit("message", message);
};
