import React from "react";
import { Props } from "./typings";
import Message from "../message";
import "./chatView.css";

const ChatView = (props: Props) => {
	const {} = props;
	return (
		<div className="chat-container">
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
				<input
					type="text"
					className="chat-input-text"
					aria-multiline="true"
				/>
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
