import { div } from "framer-motion/client";
import Header from "../components/header";
import Nav from "../components/Nav/nav";
import React from "react";

const Messages = () => {
  const item = [
    { label: "Dashboard", icon: "src/assets/das.svg", link: "/mainpage" },
    { label: "Appointments", icon: "src/assets/app.svg", link: "/appoiments" },
    { label: "Patients", icon: "src/assets/pat.svg", link: "/patients" },
    {
      label: "Messages",
      icon: "src/assets/mesb.svg",
      active: true,
      link: "/messages",
    },
    { label: "Report", icon: "src/assets/rep.svg", link: "/report" },
    { label: "Settings", icon: "src/assets/set.svg", link: "/settings" },
  ];

  const messageList = [
    {
      avatar: "https://placehold.co/40/add8e6/000",
      name: "Ibrahim Kadri",
      lastMessage: "See you next time Doctor. I have had a really great talk.",
    },
    {
      avatar: "https://placehold.co/40/add8e6/000",
      name: "Capri Sun",
      lastMessage: "12pm Tue is that OK?",
    },
    {
      avatar: "https://placehold.co/40/add8e6/000",
      name: "Ibrahim Kadri",
      lastMessage: "See you next time Doctor. I have had a really great talk.",
    },
    {
      avatar: "https://placehold.co/40/add8e6/000",
      name: "Capri Sun",
      lastMessage: "12pm Tue is that OK?",
    },
    {
      avatar: "https://placehold.co/40/add8e6/000",
      name: "Ibrahim Kadri",
      lastMessage: "See you next time Doctor. I have had a really great talk.",
    },
    {
      avatar: "https://placehold.co/40/add8e6/000",
      name: "Capri Sun",
      lastMessage: "12pm Tue is that OK?",
    },
    {
      avatar: "https://placehold.co/40/add8e6/000",
      name: "Ibrahim Kadri",
      lastMessage: "See you next time Doctor. I have had a really great talk.",
    },
    {
      avatar: "https://placehold.co/40/add8e6/000",
      name: "Capri Sun",
      lastMessage: "12pm Tue is that OK?",
    },
    {
      avatar: "https://placehold.co/40/add8e6/000",
      name: "Ibrahim Kadri",
      lastMessage: "See you next time Doctor. I have had a really great talk.",
    },
    {
      avatar: "https://placehold.co/40/add8e6/000",
      name: "Capri Sun",
      lastMessage: "12pm Tue is that OK?",
    },
    {
      avatar: "https://placehold.co/40/add8e6/000",
      name: "Ibrahim Kadri",
      lastMessage: "See you next time Doctor. I have had a really great talk.",
    },
    {
      avatar: "https://placehold.co/40/add8e6/000",
      name: "Capri Sun",
      lastMessage: "12pm Tue is that OK?",
    },
  ];

  const currentMessage = {
    user: {
      name: "Ibrahim Kadri",
      avatar: "https://placehold.co/10/add8e6/000",
    },
    contents: [
      {
        id: "1",
        user: "1",
        date: "6/10/2024",
        time: "11:52",
        content: "Hey Doctor, I am looking for an appointment with you.",
      },
      {
        id: "2",
        user: "2",
        date: "6/10/2024",
        time: "11:53",
        content: "Sure! When are you available?",
      },
      {
        id: "3",
        user: "1",
        date: "6/10/2024",
        time: "11:54",
        content: "Hey Doctor, I am looking for an appointment with you.",
      },
      {
        id: "4",
        user: "2",
        date: "6/10/2024",
        time: "11:56",
        content: "Sure! When are you available?",
      },
      {
        id: "5",
        user: "1",
        date: "6/10/2024",
        time: "11:57",
        content: "Hey Doctor, I am looking for an appointment with you.",
      },
      {
        id: "6",
        user: "2",
        date: "6/10/2024",
        time: "11:58",
        content: "Sure! When are you available?",
      },
      {
        id: "7",
        user: "1",
        date: "6/10/2024",
        time: "11:59",
        content: "Hey Doctor, I am looking for an appointment with you.",
      },
      {
        id: "8",
        user: "2",
        date: "6/10/2024",
        time: "12:00",
        content: "Sure! When are you available?",
      },
      {
        id: "9",
        user: "1",
        date: "6/10/2024",
        time: "12:01",
        content: "Hey Doctor, I am looking for an appointment with you.",
      },
      {
        id: "10",
        user: "2",
        date: "6/10/2024",
        time: "12:02",
        content: "Sure! When are you available?",
      },
      {
        id: "11",
        user: "1",
        date: "6/10/2024",
        time: "12:01",
        content: "Hey Doctor, I am looking for an appointment with you.",
      },
      {
        id: "12",
        user: "2",
        date: "6/10/2024",
        time: "12:02",
        content: "Sure! When are you available?",
      },
    ],
  };

  return (
    <div className="w-screen h-screen">
      {/* Header */}
      <div className="w-full h-[7.5%] flex items-center border-b border-gray-300">
        <Header />
      </div>
      <div className="grid grid-cols-6 h-[92.5%]">
        <div className="border-r border-gray-300 col-span-1 flex justify-center items-start">
          <Nav items={item} />
        </div>
        <div className="col-span-5 grid grid-cols-4 p-4 bg-customBg">
          <div className="col-span-1 bg-white rounded">
            <div className="flex justify-between p-4 border-b border-gray-300">
              <p className="font-semibold">Messages</p>
              <button>
                <img
                  src="src/assets/search.svg"
                  className="mr-2 ml-3 w-4 h-4"></img>
              </button>
            </div>
            <div className="overflow-y-auto h-[calc(100vh-154px)] py-2 pl-2 pr-3">
              {messageList.map((message, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded hover:bg-gray-200 hover:cursor-pointer w-full">
                  <img
                    className="rounded-full w-10 h-10"
                    src={message.avatar}
                    alt=""
                  />
                  <div className="flex-grow min-w-0">
                    <p className="text-xs font-semibold truncate">
                      {message.name}
                    </p>
                    <p className="text-xs text-gray-600 truncate w-full">
                      {message.lastMessage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col col-span-3 ml-4 bg-white rounded">
            <div className="flex justify-between border-b border-gray-300 p-4">
              <div className="flex items-center gap-2 h-full">
                <img
                  className="rounded-full w-4 h-4"
                  src={currentMessage.user.avatar}
                  alt=""
                />
                <p className="font-semibold">{currentMessage.user.name}</p>
              </div>
              <div className="flex gap-4">
                <button>
                  <img src="src/assets/audio.svg" className="w-5 h-5"></img>
                </button>
                <button>
                  <img src="src/assets/video.svg" className="w-5 h-5"></img>
                </button>
                <button>
                  <img src="src/assets/search.svg" className="w-4 h-4"></img>
                </button>
              </div>
            </div>
            <div className="flex-grow p-4 overflow-y-auto h-[calc(100vh-200px)]">
              {currentMessage.contents.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 mb-4 ${
                    message.user === "1" ? "justify-start" : "justify-end"
                  }`}>
                  {message.user === "1" && (
                    <img
                      src={currentMessage.user.avatar}
                      alt={currentMessage.user.name}
                      className="w-8 h-8 rounded-full"
                    />
                  )}

                  {/* Message bubble */}
                  <div className="max-w-xs">
                    <div
                      className={`break-words py-2 px-4 rounded-lg text-sm ${
                        message.user === "1" ? "bg-gray-100" : "bg-cyan-100"
                      }`}>
                      {message.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-start gap-2 border-t border-gray-300 p-3">
              <div className="flex gap-2 border-gray-300">
                <button>
                  <img src="src/assets/emoji.svg" className="w-5 h-5"></img>
                </button>
                <button>
                  <img
                    src="src/assets/attachment.svg"
                    className="w-5 h-5"></img>
                </button>
              </div>
              <textarea
                rows="1"
                className="flex-grow border-l pl-2 overflow-hidden resize-none outline-none text-sm font-inter"
                placeholder="Type your message..."
                onInput={(e) => {
                  e.target.style.height = "auto"; // Reset height
                  e.target.style.height = e.target.scrollHeight + "px"; // Adjust height based on content
                }}></textarea>
              <button className="text-sm font-semibold rounded-3xl py-0.5 px-7 text-slate-50 bg-slate-950 hover:bg-slate-700">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
