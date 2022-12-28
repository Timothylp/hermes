import { ConversationContentInterface } from "../../../model/interfaces/conversation-content-interface copy";
import { MessageInterface } from "../../../model/interfaces/message-interface";

export default class ConversationService {
  public static getConversation(): ConversationContentInterface {
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

    return conversation;
  }
}
