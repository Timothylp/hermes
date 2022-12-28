import { useState } from "react";

function MessageInput() {
  const [message, setMessage] = useState<string>("");

  return (
    <div className="flex items-center gap-2 p-2 shadow-lg md:shadow-none">
      <input
        type="text"
        value={message}
        placeholder="Votre message..."
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 rounded-md border border-gray-300 p-2 focus:border-violet-500 focus:outline-none"
      />
      <button onClick={() => {}} className="rounded-md bg-indigo-800 hover:bg-indigo-600 p-2 text-white">
        Envoyer
      </button>
    </div>
  );
}

export default MessageInput;
