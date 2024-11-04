import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer/simplepeer.min.js";

const socket = io.connect('http://localhost:3000');
const VideoChat = () => {
    const [ me, setMe ] = useState("")
	const [ stream, setStream ] = useState()
	const [ receivingCall, setReceivingCall ] = useState(false)
	const [ caller, setCaller ] = useState("")
	const [ callerSignal, setCallerSignal ] = useState()
	const [ callAccepted, setCallAccepted ] = useState(false)
	const [ idToCall, setIdToCall ] = useState("")
	const [ callEnded, setCallEnded] = useState(false)
	const [ name, setName ] = useState("")
	const myVideo = useRef()
	const userVideo = useRef()
	const connectionRef= useRef()

	useEffect(() => {
		navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
			setStream(stream)
				myVideo.current.srcObject = stream
		})

	socket.on("me", (id) => {
			setMe(id)
		})

		socket.on("callUser", (data) => {
			setReceivingCall(true)
			setCaller(data.from)
			setName(data.name)
			setCallerSignal(data.signal)
		})
	}, [])

	const callUser = (id) => {
		const peer = new Peer({
			initiator: true,
			trickle: false,
			stream: stream
		})
		peer.on("signal", (data) => {
			socket.emit("callUser", {
				userToCall: id,
				signalData: data,
				from: me,
				name: name
			})
		})
		peer.on("stream", (stream) => {
			
				userVideo.current.srcObject = stream
			
		})
		socket.on("callAccepted", (signal) => {
			setCallAccepted(true)
			peer.signal(signal)
		})

		connectionRef.current = peer
	}

	const answerCall =() =>  {
		setCallAccepted(true)
		const peer = new Peer({
			initiator: false,
			trickle: false,
			stream: stream
		})
		peer.on("signal", (data) => {
			socket.emit("answerCall", { signal: data, to: caller })
		})
		peer.on("stream", (stream) => {
			userVideo.current.srcObject = stream
		})

		peer.signal(callerSignal)
		connectionRef.current = peer
	}

	const leaveCall = () => {
		setCallEnded(true)
		connectionRef.current.destroy()
	}
    const getId = () => alert(me)

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <p className="">Video chat room</p>
            <div>
                {stream && <video playsInline muted ref={myVideo} autoPlay style={{ width: "300px", height: "300px" }} />}
            </div>
            <div>
                {callAccepted && !callEnded ? <video playsInline ref={userVideo} autoPlay style={{ width: "300px" }} /> : null}
            </div>
            <div>
                <input type="text" value={name} placeholder="Name..." onChange={e => setName(e.target.value)} />
                <input type="text" value={idToCall} onChange={e => setIdToCall(e.target.value)} />
            </div>
            <div>
                {callAccepted && !callEnded ? (
                    <button onClick={leaveCall}>End call</button>
                ) : (
                    <button onClick={() => callUser(idToCall)}>Call user</button>
                )}
                {idToCall}
            </div>
            <div>
                {receivingCall && !callEnded ? (
                    <div>
                        <h1 className="text-black text-[38px]">{name} is calling...</h1>
                        <button onClick={answerCall}>Answer</button>
                    </div>
                ) : null}
            </div>
            <button onClick={getId}>Get id</button>
        </div>
    );
};

export default VideoChat;
