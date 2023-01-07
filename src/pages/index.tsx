import { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";

import ConversationThread from "../components/conversation/ConversationThread";
import Sidebar from "../components/layouts/Sidebar";
import { ConversationWithAll } from "../model/types/prisma-custom-types";

import { socketInitializer } from "../services/socketService";

function Home() {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") socketInitializer();
  }, []);

  if (status === "unauthenticated") {
    signIn();
  }

  if (status === "authenticated") {
    return (
      <>
        <Sidebar setSelectedConversation={setSelectedConversation} />
        <ConversationThread
          setSelectedConversation={setSelectedConversation}
          selectedConversation={selectedConversation as unknown as ConversationWithAll}
        />
      </>
    );
  }
}

export default Home;
