"use client";
import useCurrentUser from "@/lib/useCurrentUser";
import { useLogin } from "@/lib/useLogin";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { user } = useCurrentUser();
	const { login } = useLogin();
	const { push } = useRouter();

	useEffect(() => {
		if (user) {
			push("/home");
		}
	}, [user, push]);

	const handleLogin = () => {
		login(email, password)
			.then((userData) => {
				push("/home");
				console.log(userData, "userData");
			})
			.catch((error) => {
				console.log(error, "userData error");
			});
	};

	return (
		<main>
			<form
				onSubmit={async (event) => {
					event.preventDefault();
					handleLogin();
				}}
			>
				<input
					type="text"
					value={email}
					onChange={(e) => {
						e.preventDefault();
						setEmail(e.target.value);
					}}
					placeholder="email"
					className="border-2 rounded mr-2 p-2 text-inherit"
				/>
				<input
					type="text"
					value={password}
					onChange={(e) => {
						e.preventDefault();
						setPassword(e.target.value);
					}}
					placeholder="password"
					className="border-2 rounded mr-2 p-2 text-inherit"
				/>
				<input
					type="submit"
					title="Login"
					className="border-2 py-2 px-4 rounded-full bg-black text-white"
				/>
			</form>
		</main>
	);
}
