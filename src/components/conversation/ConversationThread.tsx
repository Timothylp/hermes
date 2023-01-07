import { useState, useEffect } from "react";
import Message from "./Message";
import Image from "next/image";
import { ConversationWithAll } from "../../model/types/prisma-custom-types";
import MessageInput from "./MessageInput";
import { useSession } from "next-auth/react";


function ConversationThread({ selectedConversation, setSelectedConversation }: { selectedConversation: ConversationWithAll; setSelectedConversation: any }) {
  
  const { data: session, status } = useSession();
  const [conversationContent, setConversationContent] = useState<ConversationWithAll>();

  useEffect(() => {

    if (!selectedConversation) return;
    
    fetch(`/api/conversations`, {
      method: "POST",
      body: JSON.stringify({
        userId: session?.token?.sub,
        conversationId: selectedConversation.id,
      }),
    })
      .then((res) => res.json())
      .then((conversation: ConversationWithAll) => {
        console.log(conversation)
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
      } flex h-[92vh] w-full flex-col bg-white transition-[left] duration-300 md:relative md:left-0 md:w-3/4`}
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
            <Image src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/139243499_3945354685495166_9112770101454389337_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=c2WdHWVKR8gAX9YF85H&_nc_ht=scontent-cdt1-1.xx&oh=00_AfDe0dzQ2UYzQs61Vr0D4sXmpb6NfPLAblWvGdGyV8f2VQ&oe=63D38A70"
              alt="profile" width={256} height={171} className="h-7 w-7 rounded-full object-cover md:h-16 md:w-16" />
            <p className="text-lg">{selectedConversation?.users?.filter((user) => user.id !== session?.token?.sub).map((user) => user.username).join(", ")}</p>
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

export default ConversationThread;
