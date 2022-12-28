import { ConversationMemberInterface } from "./conversation-member-interface";
import { MessageInterface } from "./message-interface";

export interface ConversationContentInterface {
  messages: MessageInterface[];
  members: ConversationMemberInterface[];
}
