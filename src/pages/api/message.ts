// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ConversationContentInterface } from "../../model/interfaces/conversation-content-interface";
import { MessageInterface } from "../../model/interfaces/message-interface";


function postMessage(message: MessageInterface): boolean {
  //use of socket system TO DO
  return true;
}
