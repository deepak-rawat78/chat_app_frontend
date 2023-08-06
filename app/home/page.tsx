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
		<div>
			<form>
				Hello {user?.data?.userName}
				{", "}
				<input
					type="submit"
					onClick={handleLogout}
					value="Logout"
					style={{
						border: "1px dotted blue",
					}}
				/>
			</form>
		</div>
	);
};

export default Home;
