"use client";

import useCurrentUser from "@/lib/useCurrentUser";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ChatView from "@/src/components/chatView/ChatView";
import "./home.css";
import ChatCard from "@/src/components/chatCard";
import { ChatCardDataType } from "./typings";
import AddUser from "@/src/components/addUser";
import { addContactApi, getUserContactListApi } from "@/apis/user";

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
	const [addContactResponse, setAddContactResponse] = useState({
		isLoading: false,
		errorMessage: "",
	});
	const [contactList, setContactList] = useState({
		isLoading: false,
		errorMessage: "",
		data: [],
	});

	useEffect(() => {
		if (user?.data) {
			getUserContactList(0, 5);
		}
	}, [user]);

	const handleLogout = () => {
		logout().then(() => {
			router.replace("/");
		});
	};

	const handleSearchChange = (value: string) => {
		setSearchValue(value);
	};

	const getUserContactList = (skip: number, limit: number) => {
		if (skip === 0) {
			setContactList({
				isLoading: true,
				errorMessage: "",
				data: [],
			});
		} else {
			setContactList({
				...contactList,
				isLoading: true,
				errorMessage: "",
			});
		}
		getUserContactListApi({ skip, limit })
			.then((res) => {
				setContactList({
					isLoading: false,
					errorMessage: "",
					data: res.data.data,
				});
			})
			.catch((error) => {
				setContactList({
					...contactList,
					isLoading: false,
					errorMessage: error.message,
				});
			});
	};

	const handleClickOnSaveUserName = () => {
		setAddContactResponse({ isLoading: true, errorMessage: "" });
		addContactApi({ peerUserName: searchValue })
			.then(() => {
				getUserContactList(0, 5);
				setAddContactResponse({
					isLoading: false,
					errorMessage: "",
				});
			})
			.catch((error) => {
				setAddContactResponse({
					isLoading: false,
					errorMessage: error.message,
				});
			})
			.finally(() => {
				setSearchValue("");
			});
	};

	const handleOnClickChatCard = (user: ChatCardDataType) => () => {
		setSelectedUser(user);
	};

	const renderChatCard = (value: ChatCardDataType) => (
		<ChatCard
			isActive={false}
			userName={value.contact.userName}
			lastMessageAt={new Date(value.createdAt).toLocaleTimeString()}
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

					{contactList?.data?.data?.map(renderChatCard)}
				</div>
				{selectedUser ? (
					<ChatView selectedChat={selectedUser} />
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
