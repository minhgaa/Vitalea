import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer/simplepeer.min.js";

const socket = io.connect('http://localhost:3000');

const VideoChat = () => {
    const [me, setMe] = useState("");
    const [stream, setStream] = useState();
    const [receivingCall, setReceivingCall] = useState(false);
    const [caller, setCaller] = useState("");
    const [callerSignal, setCallerSignal] = useState();
    const [callAccepted, setCallAccepted] = useState(false);
    const [idToCall, setIdToCall] = useState("");
    const [callEnded, setCallEnded] = useState(false);
    const [name, setName] = useState("");
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();
    const chatBoxRef = useRef();

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
            setStream(stream);
            if (myVideo.current) {
                myVideo.current.srcObject = stream;
            }
        });

        socket.on("me", (id) => setMe(id));

        socket.on("callUser", (data) => {
            setReceivingCall(true);
            setCaller(data.from);
            setName(data.name);
            setCallerSignal(data.signal);
        });

        socket.on("receiveMessage", (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });
    }, []);

    const callUser = (id) => {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream: stream
        });

        peer.on("signal", (data) => {
            socket.emit("callUser", {
                userToCall: id,
                signalData: data,
                from: me,
                name: name
            });
        });

        peer.on("stream", (stream) => {
            if (userVideo.current) {
                userVideo.current.srcObject = stream;
            }
        });

        socket.on("callAccepted", (signal) => {
            setCallAccepted(true);
            peer.signal(signal);
        });

        connectionRef.current = peer;
    };

    const answerCall = () => {
        setCallAccepted(true);
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream: stream
        });

        peer.on("signal", (data) => {
            socket.emit("answerCall", { signal: data, to: caller });
        });

        peer.on("stream", (stream) => {
            if (userVideo.current) {
                userVideo.current.srcObject = stream;
            }
        });

        peer.signal(callerSignal);
        connectionRef.current = peer;
    };

    const leaveCall = () => {
        setCallEnded(true);
        connectionRef.current.destroy();
    };

    const getId = () => alert(me);

    const sendMessage = () => {
        if (message.trim() !== "") {
            const data = { sender: me, content: message };
            socket.emit("sendMessage", data);
            setMessages((prevMessages) => [...prevMessages, data]);
            setMessage("");
        }
    };

    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="w-screen h-screen flex flex-col bg-gray-100">
            <header className="flex justify-between items-center bg-white p-4 shadow-md">
                <div className="text-xl font-bold">Grunge.</div>
                <button className="text-sm bg-gray-200 px-4 py-2 rounded">Full Screen</button>
            </header>

            <main className="flex-grow flex flex-col md:flex-row">
                <div className="flex-1 flex justify-center items-center">
                    <div className="relative w-4/5 max-w-xl">
                        {(
                            <video
                                playsInline
                                muted
                                ref={myVideo}
                                autoPlay
                                className="w-full h-full object-cover rounded-lg border border-gray-300"
                            />
                        )}
                        <div className="absolute bottom-2 left-2 bg-white px-2 py-1 text-sm font-medium rounded shadow">
                            {name || "Me"}
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <div className="relative w-4/5 max-w-xl">
                        {callAccepted && !callEnded && (
                            <video
                                playsInline
                                ref={userVideo}
                                autoPlay
                                className="w-full h-full object-cover rounded-lg border border-gray-300"
                            />
                        )}
                        <div className="absolute bottom-2 left-2 bg-white px-2 py-1 text-sm font-medium rounded shadow">
                            {caller || "Caller"}
                        </div>
                    </div>
                </div>
            </main>

            <div className="flex flex-col items-center mt-6">
                <input
                    type="text"
                    value={name}
                    placeholder="Your Name"
                    onChange={(e) => setName(e.target.value)}
                    className="px-4 py-2 rounded-lg mb-4 text-black"
                />
                <input
                    type="text"
                    value={idToCall}
                    placeholder="ID to Call"
                    onChange={(e) => setIdToCall(e.target.value)}
                    className="px-4 py-2 rounded-lg mb-4 text-black"
                />

                {callAccepted && !callEnded ? (
                    <button
                        onClick={leaveCall}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg">
                        End Call
                    </button>
                ) : (
                    <button
                        onClick={() => callUser(idToCall)}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
                        Call User
                    </button>
                )}
            </div>

            {receivingCall && !callEnded && (
                <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-lg text-center">
                    <h2 className="text-xl font-semibold mb-4">{name} is calling...</h2>
                    <button
                        onClick={answerCall}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg">
                        Answer
                    </button>
                </div>
            )}

            <div className="flex-1 p-4 bg-white shadow-md mt-6 w-full md:w-1/2 mx-auto rounded-lg">
                <div
                    ref={chatBoxRef}
                    className="h-64 overflow-y-scroll bg-gray-100 p-4 rounded-lg mb-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={msg.sender === me ? "text-right" : "text-left"}>
                            <p className="text-sm font-bold">{msg.sender === me ? "You" : "Other"}</p>
                            <p className="text-base bg-blue-100 p-2 rounded-lg inline-block mb-2">
                                {msg.content}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex items-center space-x-4">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 px-4 py-2 rounded-lg border border-gray-300"
                    />
                    <button
                        onClick={sendMessage}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
                        Send
                    </button>
                </div>
            </div>

            <button
                onClick={getId}
                className="mt-6 bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg">
                Get Your ID
            </button>

            <footer className="flex justify-center items-center space-x-4 bg-white p-4 shadow-inner">
                <button
                    className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full"
                    onClick={leaveCall}
                >
                    📴
                </button>
                <button
                    className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full"
                    onClick={() => callUser(idToCall)}
                >
                    📞
                </button>
                <button
                    className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full"
                    onClick={() => navigator.clipboard.writeText(me)}
                >
                    📋
                </button>
            </footer>
        </div>
    );
};

export default VideoChat;