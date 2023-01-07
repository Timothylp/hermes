import { Message } from "@prisma/client";
import Image from "next/image";
import { useSession } from "next-auth/react";

function Message(message: Message) {
  const { data: session, status } = useSession();
  const userId = session?.user ? session?.user.id : session?.token?.sub;

  const tempUrl =
    "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/139243499_3945354685495166_9112770101454389337_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=c2WdHWVKR8gAX9YF85H&_nc_ht=scontent-cdt1-1.xx&oh=00_AfDe0dzQ2UYzQs61Vr0D4sXmpb6NfPLAblWvGdGyV8f2VQ&oe=63D38A70";

  return (
    <div
      className={`mt-2 flex h-auto w-full items-center gap-2
        ${message.userId === userId ? "flex-row-reverse" : ""}`}
    >
      <Image
        src={tempUrl}
        alt="profile"
        width={256}
        height={171}
        className={`mb-1 h-6 w-6 rounded-full object-cover md:h-12 md:w-12
        ${message.userId === userId ? "hidden" : ""}`}
      />
      <p className={`w-auto rounded-md p-2  text-xs font-medium	text-white ${message.userId === userId ? "bg-indigo-800" : "bg-blue-600"}`}>{message.content}</p>
    </div>
  );
}

export default Message;
