import { useState } from "react";
import Image from "next/image";
import { ConversationProfilInterface } from "../model/interfaces/conversation-profil-interface";

function Sidebar({ setSelectedConversation }: { setSelectedConversation: any }) {
  const tempUrl =
    "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.6435-9/139243499_3945354685495166_9112770101454389337_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=c2WdHWVKR8gAX9YF85H&_nc_ht=scontent-cdt1-1.xx&oh=00_AfDe0dzQ2UYzQs61Vr0D4sXmpb6NfPLAblWvGdGyV8f2VQ&oe=63D38A70";

  const tempMesage =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in nulla vehicula, semper justo venenatis, euismod neque. Integer nec mi tincidunt, luctus quam ac, efficitur ex. Praesent at lobortis neque, eu ultrices nunc. Nam tempus tristique erat quis rhoncus. Nunc scelerisque mauris nec eros eleifend, et ultricies ante tincidunt. Curabitur venenatis nulla id blandit vestibulum. Sed pretium volutpat sem, id viverra turpis pulvinar vitae. Aliquam ut augue magna. Cras est ante, faucibus eget tortor quis, dignissim maximus magna. Praesent leo tellus, lacinia venenatis neque sed, lacinia ultricies nulla. Pellentesque dapibus fermentum purus rutrum porttitor.";

  const [conversationProfil, setConversationProfil] = useState<ConversationProfilInterface[]>([
    { id: "a", profile: tempUrl, name: "John", message: tempMesage },
    { id: "b", profile: tempUrl, name: "Jane", message: tempMesage },
    { id: "c", profile: tempUrl, name: "Jack", message: tempMesage },
  ]);

  const handleContactClick = (conversationProfil: ConversationProfilInterface) => {
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
          <div
            key={index}
            className="flex cursor-pointer flex-row items-center space-x-4 rounded-md px-1 py-2 hover:bg-violet-100"
            onClick={() => handleContactClick(conversationProfil)}
          >
            <Image
              src={conversationProfil.profile}
              alt="profile"
              width={256}
              height={171}
              className="h-12 w-12 rounded-full object-cover md:h-16 md:w-16"
            />
            <div className="flex min-w-0 max-w-full shrink flex-col break-words">
              <p className="text-lg md:text-xl">{conversationProfil.name}</p>
              <p
                className="overflow-hidden text-ellipsis whitespace-nowrap text-sm
               text-gray-600 md:text-base"
              >
                {conversationProfil.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
