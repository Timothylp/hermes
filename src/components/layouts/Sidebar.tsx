import { useState, useEffect } from "react";
import { ConversationProfilInterface } from "../../model/interfaces/conversation-profil-interface";
import ConversationExcerpt from "../conversation/ConversationExcerpt";
import { ConversationWithAll } from "../../model/types/prisma-custom-types";
import { useSession } from "next-auth/react";

function Sidebar({ setSelectedConversation }: { setSelectedConversation: any }) {
  const { data: session } = useSession();
  const [conversationProfil, setConversationProfil] = useState(Array<ConversationWithAll>);

  useEffect(() => {
    fetch(`/api/conversations/`, {
      method: "POST",
      body: JSON.stringify({
        userId: session?.token?.sub
      })
    })
      .then((res) => res.json())
      .then((conversations: Array<ConversationWithAll>) => {
        console.log(conversations);
        setConversationProfil(conversations);
      });
  }, []);

  const handleCloseConversation = () => {
    setSelectedConversation(null);
  };

  const handleContactClick = (conversationProfil: ConversationWithAll) => {
    setSelectedConversation(conversationProfil);
  };

  return (
    <div className="flex w-full flex-col gap-2 p-2 md:w-1/4 md:border-r md:p-4">
      <div className="flex flex-col gap-2 px-1 pb-2">
        <h1 className="text-xl font-bold md:text-2xl">Conversations</h1>
        <input
          type="text"
          className="w-full rounded-md border border-gray-300 p-2 focus:border-violet-500 focus:outline-none"
          placeholder="Rechercher dans vos conversations"
        />
      </div>
      <div className="flex flex-col gap-1 md:gap-2">
        {conversationProfil.map((conversationProfil, index) => (
          <ConversationExcerpt key={index} conversation={conversationProfil} onClickConversation={handleContactClick} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
