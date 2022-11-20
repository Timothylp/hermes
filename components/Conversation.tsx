import { useState } from "react";
import { MessageInterface } from "../model/interfaces/message-interface";
import Message from "./Message";

function Conversation() {
  const [messages, setMessages] = useState<MessageInterface[]>([
    { userId: "a", content: "coucou ", isMine: true },
    { userId: "a", content: "coucou ", isMine: true },
    { userId: "a", content: "coucou ", isMine: true },
  ]);

  return (
    <div className="h-screen w-screen flex-col justify-center">
      {messages.map((message) => (
        <Message {...message} />
      ))}
    </div>
  );
}

export default Conversation;
