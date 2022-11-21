import { useState, useEffect } from "react";
import { MessageInterface } from "../model/interfaces/message-interface";
import Message from "./Message";
import Image from "next/image";
import { ConversationContentInterface } from "../model/interfaces/conversation-content-interface copy";
import { ConversationProfilInterface } from "../model/interfaces/conversation-profil-interface";

function Conversation({
  selectedConversation,
  setSelectedConversation,
}: {
  selectedConversation: ConversationProfilInterface;
  setSelectedConversation: any;
}) {
  const [conversationContent, setConversationContent] = useState<ConversationContentInterface>();

  useEffect(() => {
    fetch(`/api/conversation`)
      .then((res) => res.json())
      .then((conv: ConversationContentInterface) => {
        console.log();
        setConversationContent(conv);
      });
  }, [selectedConversation]);

  // const [messages, setMessages] = useState<MessageInterface[]>([
  //   {
  //     userId: "a",
  //     content: "J'adore sucer des grosses bites",
  //     isMine: false,
  //   },
  //   {
  //     userId: "a",
  //     content:
  //       "Je pense qu'Alan tout-compte fait est quelqu'un de super sympa et intéressant, je pense l'inviter au resto pour avoir une super conversation avec lui ",
  //     isMine: false,
  //   },
  //   { userId: "a", content: "Monsieur Babau le sang", isMine: false },
  //   { userId: "a", content: "T'es bizarre mec", isMine: true },
  //   {
  //     userId: "a",
  //     content: "Un petit oiseau se balladait au delà de la montage. Celui-ci avait très froid à cause des vents forts",
  //     isMine: true,
  //   },
  // ]);

  const handleCloseConversation = () => {
    setSelectedConversation(null);
  };

  return (
    <div
      id="conversation"
      className={`absolute ${
        selectedConversation ? "left-0" : "left-full"
      } flex w-full flex-col gap-5 bg-white transition-[left] duration-300 md:relative md:left-0 md:w-3/4`}
    >
      <div className="border-b-1 flex items-center gap-2 p-2 shadow-lg md:border-b md:shadow-none">
        <svg
          onClick={() => handleCloseConversation()}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 md:hidden"
        >
          <path
            fillRule="evenodd"
            d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
            clipRule="evenodd"
          />
        </svg>
        {selectedConversation ? (
          <div className="flex items-center gap-2">
            <Image
              src={selectedConversation.profile}
              alt="profile"
              width={256}
              height={171}
              className="h-7 w-7 rounded-full object-cover md:h-16 md:w-16"
            />
            <p className="text-lg">{selectedConversation.name}</p>
          </div>
        ) : null}
      </div>
      {conversationContent?.messages?.map((message) => (
        <Message {...message} />
      ))}
    </div>
  );
}

export default Conversation;
