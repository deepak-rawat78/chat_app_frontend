import React from "react";
import { Props } from "./typings";
import "./message.css";

const Message = (props: Props) => {
	const { value, isOwnMessage } = props;

	return (
		<div className="message-container">
			<div
				className={
					isOwnMessage
						? "message-inner message-inner--right"
						: "message-inner message-inner--left"
				}
			>
				<p
					className={
						isOwnMessage
							? "message-sender--name message-sender--name-left"
							: "message-sender--name"
					}
				>
					{isOwnMessage ? "You" : "Other"}
				</p>
				<div className="message-text--container ">
					<p className="message-text">{value} </p>
				</div>
			</div>
		</div>
	);
};

export default Message;
