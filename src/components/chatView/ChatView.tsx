import React, { useEffect, useRef, useState } from "react";
import { Props } from "./typings";
import Message from "../message";
import "./chatView.css";
import useCurrentUser from "@/lib/useCurrentUser";
import SignalingService from "@/utils/SignalingService";

const ChatView = (props: Props) => {
	const { selectedChat } = props;
	const {
		contact: { userName: peerUserName, _id: peerId },
	} = selectedChat;
	const { user, logout } = useCurrentUser();

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
			sendTo: peerUserName,
			from: user.data.userName,
			message: messageText,
		});
		setMessageList((prevMessage) => [
			...prevMessage,
			{
				value: messageText,
				status: null,
				sender: { _id: user.data._id },
				recevier: { _id: peerId },
				_id: null,
			},
		]);
	};

	return (
		<div className="chat-container">
			<div className="chat-header">
				<div className="chat-header-inner">
					<p className="chat-header--username">{peerUserName}</p>
					<p className="chat-header--status">Active</p>
				</div>
			</div>
			<div className="chat-message--container">
				{messageList.map((messageData: any, index: number) => (
					<Message
						key={index}
						senderUserName={messageData.sender.userName}
						from={messageData.from}
						value={messageData.value}
						isOwnMessage={user.data._id === messageData.sender._id}
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
