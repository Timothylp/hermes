// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ConversationWithAll } from "../../model/types/prisma-custom-types";
import prisma from "../../server/db/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse<ConversationWithAll | Array<ConversationWithAll>>) {
  if (req.method === "POST") {
    req.body = JSON.parse(req.body);

    if (req.body.conversationId !== undefined) {
      const conversation = await prisma.conversation
        .findFirst({
          where: {
            id: req.body.conversationId,
          },
          include: {
            messages: true,
            users: true,
          },
        })
        .catch((error: Error) => {
          throw error;
        });

      res.status(200).json(conversation as ConversationWithAll);
    } else {
      const user = await prisma.user
        .findFirst({
          where: {
            id: req.body.userId,
          },
          include: {
            conversations: {
              include: {
                users: true,
                messages: true,
              },
            },
          },
        })
        .catch((error: Error) => {
          throw error;
        });

      res.status(200).json(user?.conversations as Array<ConversationWithAll>);
    }
  }
}
