import { FormEvent, useState } from "react";
import Button from "../ui/Button";
import { sendMessage } from "../../services/socketService";

function MessageInput() {
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //need to be able to send the conversation id
    sendMessage(message);
    setMessage("");
  };

  return (
    <form className="flex items-center gap-2 p-2 shadow-lg md:shadow-none" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={message}
        placeholder="Votre message..."
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 rounded-md border border-gray-300 p-2 focus:border-violet-500 focus:outline-none"
      />
      <Button type="submit">
        Envoyer
      </Button>
    </form>
  );
}

export default MessageInput;
