import React, { useEffect, useRef, useState } from "react";
import { Props } from "./typings";
import Message from "../message";
import "./chatView.css";
import useCurrentUser from "@/lib/useCurrentUser";
import SignalingService from "@/utils/SignalingService";

const ChatView = (props: Props) => {
	const {} = props;
	const { user, logout } = useCurrentUser();
	const senderUserName =
		user?.data?.userName !== "deepak08" ? "deepak07" : "deepak08";
	const [messageText, setMessageText] = useState("");
	const [messageList, setMessageList] = useState([]);
	const [messageService, setMessageService] =
		useState<SignalingService | null>(null);

	useEffect(() => {
		if (user?.data?.userName) initMessageService();
	}, [user?.data?.userName]);

	const handleOnChangeMessage = (e) => {
		e.preventDefault();
		console.log(e.target.value);

		setMessageText(e.target.value);
	};

	const handleClickOnSendButton = (e) => {
		e.preventDefault();
		sendMessage();
	};

	const getMessageListener = (data) => {
		setMessageList((prevMessage) => [...prevMessage, data]);
	};

	const initMessageService = () => {
		let temp = new SignalingService(user?.data?._id);
		temp.connect();

		temp.getMessage(getMessageListener);
		setMessageService(temp);
	};

	const sendMessage = () => {
		messageService?.sendMessage({
			sendTo: user.data.userName === "deepak08" ? "deepak07" : "deepak08",
			from: user.data.userName,
			message: messageText,
		});
		setMessageList((prevMessage) => [
			...prevMessage,
			{
				sendTo:
					user.data.userName === "deepak08" ? "deepak07" : "deepak08",
				from: user.data.userName,
				message: messageText,
			},
		]);
	};

	return (
		<div className="chat-container">
			<div className="chat-header">
				<div className="chat-header-inner">
					<p className="chat-header--username">
						{user?.data?.userName}
					</p>
					<p className="chat-header--status">Active</p>
				</div>
			</div>
			<div className="chat-message--container">
				{messageList.map((value: any, index: number) => (
					<Message
						key={index}
						from={value.from}
						value={value.message}
						isOwnMessage={senderUserName === value.from}
					/>
				))}
			</div>
			<div className="chat-input-container">
				<input
					type="text"
					className="chat-input-text"
					value={messageText}
					onChange={handleOnChangeMessage}
				/>
				<button
					type="button"
					className="chat-input-button"
					value="Send"
					onClick={handleClickOnSendButton}
				/>
			</div>
		</div>
	);
};

export default ChatView;
