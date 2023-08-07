"use client";

import useCurrentUser from "@/lib/useCurrentUser";
import React from "react";
import { useRouter } from "next/navigation";

const Home = () => {
	const { user, logout } = useCurrentUser();
	const router = useRouter();
	const handleLogout = () => {
		logout().then(() => {
			router.replace("/login");
		});
	};
	console.log(user, "user data");
	if (!user) {
		return <div>Loading... </div>;
	}
	return (
		<div className="mt-5 ml-5">
			<form>
				<h3 className="text-4xl">
					Hello {user?.data?.userName}
					{", "}
				</h3>
				<input
					type="submit"
					onClick={handleLogout}
					value="Logout"
					className="border-2 border-black rounded-3xl py-1 px-6 mt-2"
				/>
			</form>
		</div>
	);
};

export default Home;
