import { NextApiRequest, NextApiResponse } from "next";
import { AuthResponseInterface } from "../../../model/interfaces/authResponseInterface";
import ConversationService from "./conversationService";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AuthResponseInterface>
) {
  if (req.method === "POST") {
    let userToken = (Math.random() + 1).toString(36).substring(7);
    console.log("random", userToken);

    let user: AuthResponseInterface = {
      user: {
        id: "1",
        surname: "Damido",
        age: 24,
      },
      token: userToken,
      conversationlist: [ConversationService.getConversation()],
    };

    res.status(200).json(user);
  }
}
