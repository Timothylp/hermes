import { MessageInterface } from "../model/interfaces/message-interface";
import Image from "next/image";

function Message(message: MessageInterface) {
  const tempUrl =
    "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/139243499_3945354685495166_9112770101454389337_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=H96yA52Cg-oAX_fGxVc&_nc_ht=scontent-cdt1-1.xx&oh=00_AfAMiHD0aztiu3xauvmM_tj66oWlPTPsqNttAxgp25GF5g&oe=63A21A30";
  return (
    <div
      id="message"
      className={`flex h-auto w-full items-end gap-1 px-3 
        ${message.isMine === true ? "flex-row-reverse" : ""}`}
    >
      <Image
        id="userPP"
        src={tempUrl}
        alt="profile"
        width={256}
        height={171}
        className={`mb-0 mb-1 h-6 w-6 rounded-full  object-cover md:h-16 md:w-16
        ${message.isMine === true ? "hidden" : ""}`}
      />
      <div className=" w-auto break-words rounded-md bg-blue-300 p-2">
        <p className="text-xs">{message.content}</p>
      </div>
      <div className="w-6"></div>
    </div>
  );
}
export default Message;
