import { useCallback, useEffect, useRef, useState } from "react";
import Header from "../components/header";
import Nav from "../components/Nav/nav";
import axiosInstance from "../config/api";
import { useParams } from "react-router-dom";
import { useSocketContext } from "../context/SocketContext";
import { useAuthContext } from "../context/AuthContext";

const Conversation = () => {
    const {id} = useParams()
    const divRef = useRef(null)
    const [conversation, setConversation] = useState({})
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const [allConversations, setAllConversations] = useState([])
    const {socket} = useSocketContext()
    const {authUser} = useAuthContext()
    const getConversation = useCallback(async () => {
        const response = await axiosInstance.post(`/conversation/getconversation/${id}`)
        setConversation(response.data)
        setMessages(response.data.messages)
    }, [id])

    const getAllConversations = useCallback(async () => {
        const response = await axiosInstance.get('/conversation/1')
        setAllConversations(response.data)
    }, [])
    useEffect(() => {
        getConversation()
        getAllConversations()
    }, [getConversation, getAllConversations])
    const handleMessage = async (e) => {
        e.preventDefault()
        try {
            const response = await axiosInstance.post('/message', {
                file: ' ',
                content: message,
                date: new Date(),
                conversationId: id,
                senderId: authUser?.accountId,
                receiverId: (authUser?.role === "DOCTOR" ? conversation?.user?.accountId : conversation?.doctor?.accountId)
            })
            setMessages(prevState => ([...prevState, response.data]))
            setMessage('')
        } catch (err){
            console.log(err)
        }
    }
    if (divRef && divRef.current) {
      divRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    useEffect(() => {
      const listener = (newMessage) => {
        console.log(newMessage)
        setMessages([...messages, newMessage])
      }
      socket?.on('newMessage',listener)
      return () => socket?.off("newMessage", listener)
    }, [messages, socket])

  const item = [
    { label: "Dashboard", icon: "../src/assets/das.svg", link: "/mainpage" },
    { label: "Appointments", icon: "../src/assets/app.svg", link: "/appointments" },
    { label: "Patients", icon: "../src/assets/pat.svg", link: "/patients" },
    {
      label: "Messages",
      icon: "../src/assets/mesb.svg",
      active: true,
      link: "/messages",
    },
    { label: "Report", icon: "../src/assets/rep.svg", link: "/report" },
    { label: "Settings", icon: "../src/assets/set.svg", link: "/settings" },
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
                  src="../src/assets/search.svg"
                  className="mr-2 ml-3 w-4 h-4"></img>
              </button>
            </div>
            <div className="overflow-y-auto h-[calc(100vh-154px)] py-2 pl-2 pr-3">
              {allConversations.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded hover:bg-gray-200 hover:cursor-pointer w-full ` + (message.userId == conversation.userId ? "bg-gray-200" : "")}>
                  <img
                    className="rounded-full w-10 h-10"
                    src="https://placehold.co/40/add8e6/000"
                    alt=""
                  />
                  <div className="flex-grow min-w-0">
                    <p className="text-xs font-semibold truncate">
                      {message?.user?.firstName} {message?.user?.lastName}
                    </p>
                    <p className="text-xs text-gray-600 truncate w-full">
                      {message?.lastMessage}
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
                <p className="font-semibold">{conversation?.user?.firstName} {conversation?.user?.lastName}</p>
              </div>
              <div className="flex gap-4">
                <button>
                  <img src="../src/assets/audio.svg" className="w-5 h-5"></img>
                </button>
                <button>
                  <img src="../src/assets/video.svg" className="w-5 h-5"></img>
                </button>
                <button>
                  <img src="../src/assets/search.svg" className="w-4 h-4"></img>
                </button>
              </div>
            </div>
            <div className="flex-grow p-4 overflow-y-auto h-[300px]">
              {messages?.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 mb-4 ${
                    message.senderId === authUser.accountId ? "justify-end" : "justify-start"
                  }`}>
                  {message.senderId !== authUser.accountId && (
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
              <div className="h-6" ref={divRef}></div>
            </div>
            <div className="flex items-center border-t pt-4 border-gray-300">
              <div className="flex gap-2 border-gray-300">
                <button>
                  <img src="../src/assets/emoji.svg" className="w-5 h-5"></img>
                </button>
                <button>
                  <img
                    src="../src/assets/attachment.svg"
                    className="w-5 h-5"></img>
                </button>
              </div>
              <form onSubmit={e => handleMessage(e)} className="flex items-center w-full">
                <div className="w-full border border-[#B3B3B3] rounded-md p-2 ">
                    <input value={message} onChange={e => setMessage(e.target.value)} className="w-full outline-none border-none" type="text" placeholder="Type your message..."/>
                </div>
                <button className="text-sm font-semibold rounded-md  px-6 py-2 ml-4 text-slate-50 bg-slate-950 hover:bg-slate-700">
                    Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
