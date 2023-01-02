import Image from "next/image";
import { ConversationProfilInterface } from "../../model/interfaces/conversation-profil-interface";

function ConversationExcerpt({ conversation, onClickConversation }: { conversation: ConversationProfilInterface; onClickConversation: Function }) {
  return (
    <div
      className="flex cursor-pointer flex-row items-center space-x-4 rounded-md px-1 py-2 hover:bg-violet-100"
      onClick={() => onClickConversation(conversation)}
    >
      <Image src={conversation.profile} alt="profile" width={256} height={171} className="h-12 w-12 rounded-full object-cover md:h-16 md:w-16" />
      <div className="flex min-w-0 max-w-full shrink flex-col break-words">
        <p className="text-lg md:text-xl">{conversation.name}</p>
        <p
          className="overflow-hidden text-ellipsis whitespace-nowrap text-sm
               text-gray-600 md:text-base"
        >
          {conversation.message}
        </p>
      </div>
    </div>
  );
}

export default ConversationExcerpt;
