import { MessageInterface } from "../model/interfaces/message-interface";
import Image from 'next/image'

function Message(message: MessageInterface) {
    const tempUrl =
    "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/139243499_3945354685495166_9112770101454389337_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=H96yA52Cg-oAX_fGxVc&_nc_ht=scontent-cdt1-1.xx&oh=00_AfAMiHD0aztiu3xauvmM_tj66oWlPTPsqNttAxgp25GF5g&oe=63A21A30";
  return (<div className = "w-1/2 h-300 flex">
    {/* <div className = "flex-1">
        <icon
    </div> */}

    <Image
        src={tempUrl}
        alt="profile"
        width={256}
        height={171}
        className=" flex-1 md:h-18 md:w-18 h-12 w-12 rounded-full object-cover"
    />
    <div className = "flex-5"></div>
  </div>);
}
export default Message;
