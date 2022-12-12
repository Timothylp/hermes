import { useState } from "react";

function MessageInput() {
  const [message, setMessage] = useState<string>("");

  return (
    <div className="flex items-center gap-2 p-2 shadow-lg md:shadow-none">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 rounded-md border-2 border-gray-200 p-2 focus:border-blue-500 focus:outline-none"
      />
      <button onClick={() => {}} className="rounded-md bg-blue-500 p-2 text-white">
        Envoyer
      </button>
    </div>
  );
}

export default MessageInput;
