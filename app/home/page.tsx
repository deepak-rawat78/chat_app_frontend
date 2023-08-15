"use client";

import useCurrentUser from "@/lib/useCurrentUser";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ChatView from "@/src/components/chatView/ChatView";
import "./home.css";
import ChatCard from "@/src/components/chatCard";
import { ChatCardDataType } from "./typings";
import AddUser from "@/src/components/addUser";

const data = [
	{
		userName: "deepak07",
		isActive: true,
		lastMessageAt: Date.now(),
	},
	{
		userName: "deepak08",
		isActive: false,
		lastMessageAt: Date.now(),
	},
];

const Home = () => {
	const { user, logout } = useCurrentUser();
	const [searchValue, setSearchValue] = useState("");
	const router = useRouter();
	const [selectedUser, setSelectedUser] = useState<ChatCardDataType | null>(
		null
	);

	const handleLogout = () => {
		logout().then(() => {
			router.replace("/login");
		});
	};

	const handleSearchChange = (value: string) => {
		setSearchValue(value);
	};

	const handleClickOnSaveUserName = () => {};

	const handleOnClickChatCard = (user: ChatCardDataType) => () => {
		setSelectedUser(user);
	};

	const renderChatCard = (value: ChatCardDataType) => (
		<ChatCard
			isActive={value.isActive}
			userName={value.userName}
			lastMessageAt={new Date(value.lastMessageAt).toLocaleTimeString()}
			onClick={handleOnClickChatCard(value)}
		/>
	);

	if (!user) {
		return <div>Loading... </div>;
	}

	return (
		<div className="mt-5 ml-5">
			<h3 className="text-4xl">
				Hello {user?.data?.userName}
				{", "}
			</h3>
			<div className="home-chat--container">
				<div className="home-chat--list">
					<div className="home-addUser--container">
						<AddUser
							value={searchValue}
							onChangeValue={handleSearchChange}
							onClickSave={handleClickOnSaveUserName}
						/>
					</div>

					{data.map(renderChatCard)}
				</div>
				{selectedUser ? (
					<ChatView userName={selectedUser?.userName} />
				) : (
					<div className="home-chat--emptyView">
						<p className="home-chat--emptyText">
							Please select user
						</p>
					</div>
				)}
			</div>
			<input
				type="submit"
				onClick={handleLogout}
				value="Logout"
				className="border-2 border-black rounded-3xl py-1 px-6 mt-2"
			/>
		</div>
	);
};

export default Home;
