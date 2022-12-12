import { useState, useEffect } from "react";
import { MessageInterface } from "../model/interfaces/message-interface";
import Message from "./Message";
import Image from "next/image";
import { ConversationContentInterface } from "../model/interfaces/conversation-content-interface copy";
import { ConversationProfilInterface } from "../model/interfaces/conversation-profil-interface";
import MessageInput from "./MessageInput";

function Conversation({ selectedConversation, setSelectedConversation }: { selectedConversation: ConversationProfilInterface; setSelectedConversation: any }) {
  const [conversationContent, setConversationContent] = useState<ConversationContentInterface>();

  useEffect(() => {
    fetch(`/api/conversation`)
      .then((res) => res.json())
      .then((conversation: ConversationContentInterface) => {
        setConversationContent(conversation);
      });
  }, [selectedConversation]);

  const handleCloseConversation = () => {
    setSelectedConversation(null);
  };

  if (!selectedConversation) {
    return (
      <div className="flex w-full items-center justify-center">
        <p>Pas de conversation sélectionnée</p>
      </div>
    );
  }

  return (
    <div
      id="conversation"
      className={`absolute ${
        selectedConversation ? "left-0" : "left-full"
      } flex h-full w-full flex-col bg-white transition-[left] duration-300 md:relative md:left-0 md:w-3/4`}
    >
      <div className="border-b-1 flex items-center gap-2 p-2 shadow-lg md:border-b md:shadow-none">
        <svg onClick={() => handleCloseConversation()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 md:hidden">
          <path
            fillRule="evenodd"
            d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
            clipRule="evenodd"
          />
        </svg>
        {selectedConversation ? (
          <div className="flex items-center gap-2">
            <Image src={selectedConversation.profile} alt="profile" width={256} height={171} className="h-7 w-7 rounded-full object-cover md:h-16 md:w-16" />
            <p className="text-lg">{selectedConversation.name}</p>
          </div>
        ) : null}
      </div>

      <div className="h-full p-2">
        {conversationContent?.messages ? (
          conversationContent.messages.map((message, index) => <Message key={index} {...message} />)
        ) : (
          <p className="text-center">La conversation n'a pas encore débuté</p>
        )}
      </div>

      <MessageInput />
    </div>
  );
}

export default Conversation;
