import React from "react";
import { Props } from "./typings";
import Message from "../message";

const ChatView = (props: Props) => {
	const {} = props;
	return (
		<div className="h-52 w-1/2 border-2  ">
			<Message
				value="ds kjflksdj fklsdjk fjksjd fklsjdfj"
				isOwnMessage={true}
			/>
			<Message
				value="ds kjflksdj fklsdjk fjksjd fklsjdfj"
				isOwnMessage={false}
			/>
		</div>
	);
};

export default ChatView;
