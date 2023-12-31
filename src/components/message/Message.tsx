import React from "react";
import { Props } from "./typings";
import "./message.css";

const Message = (props: Props) => {
	const { value, isOwnMessage, senderUserName } = props;

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
					{isOwnMessage ? "You" : senderUserName ?? "Other"}
				</p>
				<div
					className={
						isOwnMessage
							? "message-text--container"
							: "message-text--container message-text--container-right"
					}
				>
					<p
						className={
							isOwnMessage
								? "message-text"
								: "message-text message-text-right"
						}
					>
						{value}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Message;
