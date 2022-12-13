import { UserInfo } from "os";
import { ConversationContentInterface } from "./conversation-content-interface copy";
import { ConversationMemberInterface } from "./conversation-member-interface";
import { MessageInterface } from "./message-interface";
import { UserInterface } from "./user-interface";

export interface AuthResponseInterface {
  user: UserInterface;
  token: string;
  conversationlist: ConversationContentInterface[];
}
