import { MessageInterface } from "../model/interfaces/message-interface";
import Image from "next/image";

function Message(message: MessageInterface) {
  const tempUrl =
    "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/139243499_3945354685495166_9112770101454389337_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=H96yA52Cg-oAX_fGxVc&_nc_ht=scontent-cdt1-1.xx&oh=00_AfAMiHD0aztiu3xauvmM_tj66oWlPTPsqNttAxgp25GF5g&oe=63A21A30";
  return (
    <div
      id="message"
      className={`flex h-auto w-full items-end gap-1 px-3 
        ${message.isMine ? "flex-row-reverse" : ""}`}
    >
      <Image
        id="message__pp"
        src={tempUrl}
        alt="profile"
        width={256}
        height={171}
        className={`mb-0 mb-1 h-6 w-6 rounded-full md:h-16 md:w-16
        ${message.isMine ? "hidden" : ""}`}
      />
      <p
        id="message__content"
        className={` w-auto rounded-md p-2  text-xs font-medium	text-white	 ${
          message.isMine ? "bg-indigo-800" : "bg-blue-600"
        }`}
      >
        {message.content}
      </p>
    </div>
  );
}
export default Message;
