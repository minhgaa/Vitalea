import { useState } from "react";

const ChatComponent = () => {
  const [messages, setMessages] = useState([
    {
      sender: "Everyone",
      avatar: "https://i.pravatar.cc/40?img=1",
      content: "Hi",
      time: "10:45 AM",
    },
    {
      sender: "Yara Barros",
      avatar: "https://i.pravatar.cc/40?img=2",
      content:
        "Is there another way to get through? Elementum pulvinar etiam non quam lacus suspendisse faucibus.",
      time: "10:45 AM",
      type: "Private",
    },
    {
      sender: "Ozoemena Somayina",
      avatar: "https://i.pravatar.cc/40?img=3",
      content: "Hello. I'm glad to see you guys",
      time: "10:45 AM",
    },
  ]);
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("All");

  const sendMessage = () => {
    if (message.trim() === "") return;
    setMessages([
      ...messages,
      {
        sender: "You",
        avatar: "https://i.pravatar.cc/40?img=4",
        content: message,
        time: "10:46 AM",
        type: recipient,
      },
    ]);
    setMessage("");
  };

  return (
    <div className="w-full max-w-md h-screen bg-white shadow-lg flex flex-col">
      {/* Header */}
      <header className="p-4 bg-gray-200 border-b flex justify-between items-center">
        <h1 className="text-lg font-bold">Room chat</h1>
        <div className="flex items-center space-x-2">
          <label htmlFor="disable-chat" className="text-sm">
            Disable chat
          </label>
          <input type="checkbox" id="disable-chat" className="toggle-checkbox" />
        </div>
      </header>

      {/* Chat messages */}
      <div className="flex-grow p-4 overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className="flex items-start space-x-3">
            {/* Avatar */}
            <img
              src={msg.avatar || "https://i.pravatar.cc/40"}
              alt={`${msg.sender}'s avatar`}
              className="w-10 h-10 rounded-full"
            />
            {/* Message content */}
            <div className="flex flex-col">
              <div className="text-sm text-gray-500 flex justify-between">
                <span>{msg.sender}</span>
                <span>{msg.time}</span>
              </div>
              <div
                className={`p-3 rounded-lg mt-1 ${
                  msg.type === "Private"
                    ? "bg-yellow-100 border border-yellow-400"
                    : "bg-gray-100"
                }`}
              >
                {msg.type === "Private" && (
                  <span className="block text-xs font-bold text-yellow-700">
                    Private
                  </span>
                )}
                <p>{msg.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input and Actions */}
      <div className="p-4 border-t">
        <div className="mb-4">
          <label htmlFor="recipient" className="block text-sm font-medium">
            Send to:
          </label>
          <select
            id="recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full mt-1 p-2 rounded-lg border"
          >
            <option value="All">All</option>
            <option value="Yara Barros">Yara Barros</option>
            <option value="Ozoemena Somayina">Ozoemena Somayina</option>
          </select>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border rounded-lg"
          />
          <button
            onClick={sendMessage}
            className="p-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full"
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
