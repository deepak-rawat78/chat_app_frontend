import io, { Socket } from "socket.io-client";

class SignalingService {
	userId: string;
	socket: Socket;
	constructor(userId: string) {
		this.userId = userId;
		this.socket = new io("http://localhost:8000", {
			autoConnect: false,
		});
	}

	connect = () => {
		this.socket.on("connect", () => {
			console.log(this.userId, "this.userId");

			this.socket.emit("ready", { userName: this.userId });
		});
		this.socket.connect();
	};

	getMessage = (callback: (data: any) => void) => {
		this.socket.on("message", callback);
	};

	sendMessage = (data: { sendTo: string; from: string; message: string }) => {
		this.socket.emit("sendMessage", data);
	};
}

export default SignalingService;
