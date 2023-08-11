import React from "react";
import { Props } from "./typings";

const Message = (props: Props) => {
	const { value, isOwnMessage } = props;

	return (
		<div
			className={
				" w-fit bg-tealGreen py-0.5 px-2 rounded-md " +
				(isOwnMessage ? "ml-auto mr-0" : "")
			}
		>
			<p className="text-white text-sm leading-5">{value} </p>
		</div>
	);
};

export default Message;
