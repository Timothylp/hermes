// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ConversationContentInterface } from "../../model/interfaces/conversation-content-interface copy";
import { MessageInterface } from "../../model/interfaces/message-interface";

export default function handler(req: NextApiRequest, res: NextApiResponse<MessageInterface | boolean>) {
  if (req.method === "POST") {
  }
}

function postMessage(message: MessageInterface): boolean {
  //use of socket system TO DO
  return true;
}
