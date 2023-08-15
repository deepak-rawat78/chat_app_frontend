import React from "react";
import { ChatCardProp } from "./typings";
import "./chatCard.css";

const ChatCard = (props: ChatCardProp) => {
	const { isActive, userName, lastMessageAt, onClick } = props;
	return (
		<div
			className="chatCard-container border border-gray-100 rounded-lg shadow shadow-gray-200 p-2"
			onClick={onClick}
		>
			<div className="flex flex-row justify-between">
				<p className="text-stone-700 text-sm mb-1 font-medium">
					{userName}
				</p>
				{!isActive ? (
					<p className="text-stone-600 text-sm mb-1 mr-1">
						{lastMessageAt}
					</p>
				) : (
					<div className="w-[6px] h-[6px] rounded-xl bg-tealGreen" />
				)}
			</div>
		</div>
	);
};

export default ChatCard;
