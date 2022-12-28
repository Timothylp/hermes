import { useState } from "react";
import { useSession, getSession, signIn } from "next-auth/react";

import Conversation from "../components/Conversation";
import Sidebar from "../components/Sidebar";
import { ConversationProfilInterface } from "../model/interfaces/conversation-profil-interface";

function Home() {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    signIn();
  }

  if (status === "authenticated") {
    return (
      <>
        <Sidebar setSelectedConversation={setSelectedConversation} />
        <Conversation setSelectedConversation={setSelectedConversation} selectedConversation={selectedConversation as unknown as ConversationProfilInterface} />
      </>
    );
  }
}

export default Home;
