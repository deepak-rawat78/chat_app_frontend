import React from "react";
import { Props } from "./typings";
import Message from "../message";
import "./chatView.css";

const ChatView = (props: Props) => {
	const {} = props;
	return (
		<div className="chat-container">
			<div className="chat-header">
				<div className="chat-header-inner">
					<p className="chat-header--username">deepak-07</p>
					<p className="chat-header--status">Active</p>
				</div>
			</div>
			<div className="chat-message--container">
				<Message value="das" isOwnMessage={true} />
				<Message value="das" isOwnMessage={false} />
				<Message
					value="ds kjflksdj fklsdjk fjksjd fklsjdfjds kjflksdj fklsdjk fjksjd fklsjdfjds kjflksdj fklsdjk fjksjd fklsjdfjds kjflksdj fklsdjk fjksjd fklsjdfj"
					isOwnMessage={true}
				/>
				<Message
					value="ds kjflksdj fklsdjk fjksjd fklsjdfjds kjflksdj fklsdjk fjksjd fklsjdfjds kjflksdj fklsdjk fjksjd fklsjdfjds kjflksdj fklsdjk fjksjd fklsjdfj"
					isOwnMessage={false}
				/>
				<Message
					value="ds kjflksdj fklsdjk fjksjd fklsjdfjds kjflksdj fklsdjk fjksjd fklsjdfjds kjflksdj fklsdjk fjksjd fklsjdfjds kjflksdj fklsdjk fjksjd fklsjdfj"
					isOwnMessage={true}
				/>
				<Message
					value="ds kjflksdj fklsdjk fjksjd fklsjdfjds kjflksdj fklsdjk fjksjd fklsjdfjds kjflksdj fklsdjk fjksjd fklsjdfjds kjflksdj fklsdjk fjksjd fklsjdfj"
					isOwnMessage={true}
				/>
				<Message
					value="ds kjflksdj fklsdjk fjksjd fklsjdfjds kjflksdj fklsdjk fjksjd fklsjdfjds kjflksdj fklsdjk fjksjd fklsjdfjds kjflksdj fklsdjk fjksjd fklsjdfj"
					isOwnMessage={false}
				/>
				<Message
					value="ds kjflksdj fklsdjk fjksjd fklsjdfjds kjflksdj fklsdjk fjksjd fklsjdfjds kjflksdj fklsdjk fjksjd fklsjdfjds kjflksdj fklsdjk fjksjd fklsjdfj"
					isOwnMessage={true}
				/>
				<Message
					value="ds kjflksdj fklsdjk fjksjd fklsjdfjds kjflksdj fklsdjk fjksjd fklsjdfjds kjflksdj fklsdjk fjksjd fklsjdfjds kjflksdj fklsdjk fjksjd fklsjdfj"
					isOwnMessage={true}
				/>
				<Message
					value="ds kjflksdj fklsdjk fjksjd fklsjdfjds kjflksdj fklsdjk fjksjd fklsjdfjds kjflksdj fklsdjk fjksjd fklsjdfjds kjflksdj fklsdjk fjksjd fklsjdfj"
					isOwnMessage={false}
				/>
			</div>
			<div className="chat-input-container">
				<span
					className="input chat-input-text"
					role="textbox"
					contentEditable
				></span>
				<input
					type="submit"
					className="chat-input-button"
					value="Send"
				/>
			</div>
		</div>
	);
};

export default ChatView;
