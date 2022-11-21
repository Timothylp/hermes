import { useState } from "react";
import { MessageInterface } from "../model/interfaces/message-interface";
import Message from "./Message";

function Conversation() {
  const [messages, setMessages] = useState<MessageInterface[]>([
    {
      userId: "a",
      content: "J'adore sucer des grosses bites",
      isMine: false,
    },
    {
      userId: "a",
      content:
        "Je pense qu'Alan tout-compte fait est quelqu'un de super sympa et intéressant, je pense l'inviter au resto pour avoir une super conversation avec lui ",
      isMine: false,
    },
    { userId: "a", content: "Monsieur Babau le sang", isMine: false },
    { userId: "a", content: "T'es bizarre mec", isMine: true },
    {
      userId: "a",
      content:
        "Un petit oiseau se balladait au delà de la montage. Celui-ci avait très froid à cause des vents forts",
      isMine: true,
    },
  ]);

  return (
    <div
      id="conversation"
      className=" flex h-screen w-screen flex-col gap-5 py-3"
    >
      {messages.map((message) => (
        <Message {...message} />
      ))}
    </div>
  );
}

export default Conversation;
