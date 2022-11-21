// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ConversationContentInterface } from "../../model/interfaces/conversation-content-interface copy";
import { MessageInterface } from "../../model/interfaces/message-interface";

type GetResponse = {
  conversation: ConversationContentInterface;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetResponse>
) {
  if (req.method === "GET") {
    let messages: MessageInterface[] = [
      {
        userId: "a",
        content: "J'adore sucer des grosses bites",
        isMine: false,
      },
      {
        userId: "a",
        content:
          "Je pense qu'Alan tout-compte fait est quelqu'un de super sympa et intéressant, je pense l'inviter au resto pour avoir une super conversation avec lui ",
        isMine: false,
      },
      { userId: "a", content: "Monsieur Babau le sang", isMine: false },
      { userId: "a", content: "T'es bizarre mec", isMine: true },
      {
        userId: "a",
        content:
          "Un petit oiseau se balladait au delà de la montage. Celui-ci avait très froid à cause des vents forts",
        isMine: true,
      },
    ];

    let conversation: ConversationContentInterface = {
      messages: messages,
      members: [
        { name: "Timothy", surname: "Le Pallec" },
        { name: "Damien", surname: "Noël" },
      ],
    };

    let retrievedConversation: GetResponse = { conversation: conversation };
    res.status(200).json(retrievedConversation);
  }
}
