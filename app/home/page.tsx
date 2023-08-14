"use client";

import useCurrentUser from "@/lib/useCurrentUser";
import React from "react";
import { useRouter } from "next/navigation";
import ChatView from "@/src/components/chatView/ChatView";

const Home = () => {
	const { user, logout } = useCurrentUser();
	const router = useRouter();

	const handleLogout = () => {
		logout().then(() => {
			router.replace("/login");
		});
	};

	if (!user) {
		return <div>Loading... </div>;
	}

	return (
		<div className="mt-5 ml-5">
			<h3 className="text-4xl">
				Hello {user?.data?.userName}
				{", "}
			</h3>
			<ChatView />
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
