// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ConversationContentInterface } from "../../model/interfaces/conversation-content-interface copy";
import ConversationService from "./services/conversationService";
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ConversationContentInterface>
) {
  if (req.method === "GET") {
    let retrievedConversation: ConversationContentInterface =
      ConversationService.getConversation();

    res.status(200).json(retrievedConversation);
  }
}
