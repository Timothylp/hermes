import { type Conversation } from "@prisma/client";
import { type Message } from "@prisma/client";
import { type User } from "@prisma/client";

declare module "@prisma/client" {
    type Conversation = Conversation & {
        messages: Message[];
        users: User[];
    };
}