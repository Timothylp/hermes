import { Prisma } from '@prisma/client';

const conversationWithAll = Prisma.validator<Prisma.ConversationArgs>()({
  include: { messages: true, users: true },
});

export type ConversationWithAll = Prisma.ConversationGetPayload<typeof conversationWithAll>;

const ConversationWithMessage = Prisma.validator<Prisma.ConversationArgs>()({
  include: { messages: true },
});

export type ConversationWithMessage = Prisma.ConversationGetPayload<typeof ConversationWithMessage>;