import React from "react";
import { ChatCardProp } from "./typings";

const ChatCard = (props: ChatCardProp) => {
	const { isActive } = props;
	return (
		<div className="border border-gray-100 rounded-lg shadow shadow-gray-200 w-[300px] p-2">
			<div className="flex flex-row justify-between">
				<p className="text-stone-700 text-sm mb-1 font-medium">
					User Name
				</p>
				{!isActive ? (
					<p className="text-stone-600 text-sm mb-1 mr-1">12:00 PM</p>
				) : (
					<div className="w-[6px] h-[6px] rounded bg-green-400" />
				)}
			</div>
			<p className="text-stone-500 text-sm">Latest message received</p>
		</div>
	);
};

export default ChatCard;
