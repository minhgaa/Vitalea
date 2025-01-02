import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";
import { useAuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const socket = io.connect("http://localhost:3000");

const VideoChat = () => {
    const {authUser} = useAuthContext()
    const [roomId, setRoomId] = useState("");
    const [joinedRoom, setJoinedRoom] = useState(false);
    const myVideo = useRef();
    const userVideo = useRef();
    const peerRef = useRef();
    const streamRef = useRef(null);
	const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const messagesEndRef = useRef(null);
    useEffect(() => {
        navigator.mediaDevices
            .getUserMedia({ video: true, audio: true })
            .then((stream) => {
                streamRef.current = stream;
                if (myVideo.current) {
                    myVideo.current.srcObject = stream;
                }
            })
            .catch((error) => console.error("Error accessing media devices:", error));

        return () => {
            if (streamRef.current) {
                streamRef.current.getTracks().forEach((track) => track.stop());
            }
        };
    }, []);

    useEffect(() => {
        socket.on("userJoined", () => {
            const peer = new Peer({ initiator: true, trickle: false, stream: streamRef.current });

            peer.on("signal", (data) => {
                socket.emit("returnSignal", { roomId, signal: data });
            });

            peer.on("stream", (remoteStream) => {
                if (userVideo.current) {
                    userVideo.current.srcObject = remoteStream;
                }
            });

            peerRef.current = peer;
        });

        socket.on("receiveSignal", ({ signal }) => {
            if (peerRef.current) {
                try {
                    peerRef.current.signal(signal);
                } catch (err) {
                    console.error("Failed to signal peer:", err.message);
                }
            } else {
                const peer = new Peer({ initiator: false, trickle: false, stream: streamRef.current });

                peer.on("signal", (data) => {
                    socket.emit("returnSignal", { roomId, signal: data });
                });

                peer.on("stream", (remoteStream) => {
                    if (userVideo.current) {
                        userVideo.current.srcObject = remoteStream;
                    }
                });

                peer.signal(signal);
                peerRef.current = peer;
            }
        });

        return () => {
            socket.off("userJoined");
            socket.off("receiveSignal");
            if (peerRef.current) peerRef.current.destroy();
        };
    }, [roomId]);

    const joinRoom = () => {
        if (!roomId.trim()) {
            alert("Please enter a valid Room ID.");
            return;
        }
        setJoinedRoom(true);
        socket.emit("joinRoom", { roomId });
    };

	const sendMessage = () => {
        if (message.trim()) {
            const newMessage = { sender: authUser?.id || '', text: message, avatar: "https://via.placeholder.com/40", name: authUser?.firstName + " " + authUser?.lastName };
            socket.emit("sendMessage", { roomId, message: newMessage });
            console.log(newMessage)
            setMessages((prev) => [...prev, newMessage]);
            setMessage("");
        }
    };

	 useEffect(() => {
        socket.on("chatMessage", (newMessage) => {
            setMessages((prev) => [...prev, newMessage]);
        });
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
        return () => {
            socket.off("chatMessage");
        };
    }, []);
    return (
        <div className="h-screen flex flex-col bg-gradient-to-b from-blue-200 to-indigo-300">
            {/* Header */}
            <header className="bg-white shadow-md p-4 flex justify-between items-center">
                <Link to='/'><h1 className="text-2xl font-bold text-indigo-600">Vitalea</h1></Link>
            </header>

            {/* Main Content */}
            <div className="flex-grow flex">
                {/* Video Section */}
                <div className="flex-1 flex flex-col items-center justify-center bg-black relative">
                    <video
                        playsInline
                        muted
                        ref={myVideo}
                        autoPlay
                        className="w-full h-full object-cover rounded-md"
                    />
                    <div className="absolute bottom-6 left-6 bg-white p-2 rounded-full">
                        <span className="text-indigo-600 text-sm font-bold">Your Video</span>
                    </div>
                </div>

                {/* Remote Video Section */}
                <div className="flex-1 flex flex-col items-center justify-center bg-gray-800 relative">
                    <video
                        playsInline
                        ref={userVideo}
                        autoPlay
                        className="w-full h-full object-cover rounded-md"
                    />
                    <div className="absolute bottom-6 left-6 bg-white p-2 rounded-full">
                        <span className="text-indigo-600 text-sm font-bold">Remote Video</span>
                    </div>
                </div>
				 <div className="w-1/3 flex flex-col bg-white shadow-lg">
                    <div className="h-[200px] flex-grow overflow-y-scroll p-4">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex mb-4 ${
                                    msg.sender === authUser?.id ? "flex-row-reverse" : "flex-row"
                                } items-center`}
                            >
                                {/* Avatar */}
                                <img
                                    src={msg.avatar || "https://via.placeholder.com/40"}
                                    alt="Avatar"
                                    className="w-10 h-10 rounded-full border border-gray-300"
                                />
                                {/* Message */}
                                <div
                                    className={`ml-4 p-3 rounded-lg ${
                                        msg.sender === authUser?.id
                                            ? "ml-0 mr-4 bg-indigo-100 text-indigo-700"
                                            : "bg-gray-100 text-gray-700"
                                    }`}
                                >
                                    <span className="block text-sm font-bold">{msg.name}</span>
                                    <span>{msg.text}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 border-t flex items-center">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                        <button
                            onClick={sendMessage}
                            className="ml-4 px-4 py-2 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 transition"
                        >
                            Send
                        </button>
                    </div>
                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Footer */}
            <footer className="p-6 bg-white shadow-inner flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center gap-4">
                    <input
                        type="text"
                        value={roomId}
                        placeholder="Enter Room ID"
                        onChange={(e) => setRoomId(e.target.value)}
                        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        disabled={joinedRoom}
                    />
                    {!joinedRoom && (
                        <button
                            onClick={joinRoom}
                            className="px-4 py-2 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 transition"
                        >
                            Join Room
                        </button>
                    )}
                </div>
                <div className="mt-4 md:mt-0 flex gap-4">
                    <button className="bg-red-500 p-2 rounded-full hover:bg-red-600 transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6.388 14.83a5.06 5.06 0 00-.903.897l-1.25.625 2.625-2.75 1.5 1.25m4.125 1.5l.375 1.875 1.875-.375 1.25-1.5-2.625-2.75-1.25 1.875m-3.5-5.625c-1.5 1.5 1.75 4.625 3.5 3.5s-2-1.25-2-2m7.25-1.25a3.5 3.5 0 10-4.125 4.125M10.5 3a2.5 2.5 0 012.5 2.5m0 11.25a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
                            />
                        </svg>
                    </button>
                    <button className="bg-gray-700 p-2 rounded-full hover:bg-gray-800 transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15.232 4.232a4.2 4.2 0 016.536 5.428L11.5 20.5l-6.354-6.354a4.2"
                            />
                        </svg>
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default VideoChat;
