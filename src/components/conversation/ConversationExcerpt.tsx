import Image from "next/image";
import { ConversationWithAll } from "../../model/types/prisma-custom-types";
import { useSession } from "next-auth/react";

function ConversationExcerpt({ conversation, onClickConversation }: { conversation: ConversationWithAll; onClickConversation: Function }) {

  const { data: session } = useSession();

  return (
    <div
      className="flex cursor-pointer flex-row items-center space-x-4 rounded-md px-1 py-2 hover:bg-violet-100"
      onClick={() => onClickConversation(conversation)}
    >
      <Image src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/139243499_3945354685495166_9112770101454389337_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=c2WdHWVKR8gAX9YF85H&_nc_ht=scontent-cdt1-1.xx&oh=00_AfDe0dzQ2UYzQs61Vr0D4sXmpb6NfPLAblWvGdGyV8f2VQ&oe=63D38A70" alt="profile" width={256} height={171} className="h-12 w-12 rounded-full object-cover md:h-16 md:w-16" />
      <div className="flex min-w-0 max-w-full shrink flex-col break-words">
        <p className="text-lg md:text-xl">
          {conversation?.users?.filter((user) => user.id !== session?.token?.sub).map((user) => user.username).join(", ")}
        </p>
        <p
          className="overflow-hidden text-ellipsis whitespace-nowrap text-sm
               text-gray-600 md:text-base"
        >
          {conversation?.messages[conversation?.messages?.length - 1].content}
        </p>
      </div>
    </div>
  );
}

export default ConversationExcerpt;
