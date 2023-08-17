"use client";
import React, { useState } from "react";
import { SignUpDataKey, SignUpProps } from "./typings";
import "./signUp.css";
import { signUpApi } from "@/apis/auth";

const SignUp = (props: SignUpProps) => {
	const [signUpData, setSignUpData] = useState({
		[SignUpDataKey.NAME]: "",
		[SignUpDataKey.EMAIL]: "",
		[SignUpDataKey.USERNAME]: "",
		[SignUpDataKey.PASSWORD]: "",
		[SignUpDataKey.CONFIRM_PASSWORD]: "",
	});

	const [signUpApiResponse, setSignApiResponse] = useState({
		isLoading: false,
		errorMessage: "",
		response: { error: Boolean, message: "" },
	});
	const resetForm = () => {
		setSignUpData({
			[SignUpDataKey.NAME]: "",
			[SignUpDataKey.EMAIL]: "",
			[SignUpDataKey.USERNAME]: "",
			[SignUpDataKey.PASSWORD]: "",
			[SignUpDataKey.CONFIRM_PASSWORD]: "",
		});
	};
	const handleSignUpDataForm = (e: any) => {
		e.preventDefault();
		if (signUpApiResponse.errorMessage) {
			setSignApiResponse({
				isLoading: false,
				errorMessage: "",
				response: { error: Boolean, message: "" },
			});
		}
		setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
	};

	const handleClickOnSubmit = (e: any) => {
		e.preventDefault();
		if (
			signUpData[SignUpDataKey.PASSWORD] !==
			signUpData[SignUpDataKey.CONFIRM_PASSWORD]
		) {
			setSignApiResponse({
				isLoading: true,
				errorMessage: "Password didn't match",
				response: { error: Boolean, message: "" },
			});
			return;
		}
		setSignApiResponse({
			isLoading: true,
			errorMessage: "",
			response: { error: Boolean, message: "" },
		});
		signUpApi({
			name: signUpData[SignUpDataKey.NAME],
			userName: signUpData[SignUpDataKey.USERNAME],
			email: signUpData[SignUpDataKey.EMAIL],
			password: signUpData[SignUpDataKey.PASSWORD],
		})
			.then((res: any) => {
				resetForm();
				setSignApiResponse({
					isLoading: false,
					errorMessage: "",
					response: res.data,
				});
			})
			.catch((errorResponse: any) => {
				setSignApiResponse({
					isLoading: false,
					errorMessage: errorResponse.response.data.error,
					response: { error: Boolean, message: "" },
				});
			});
	};

	return (
		<div className="signUp--container">
			<p className="signUp--title">Sign Up</p>
			<form className="signUp-form" onSubmit={handleClickOnSubmit}>
				<div className="signUp-form-input--container">
					<label className="signUp-form-input--label">Name</label>
					<input
						type="text"
						value={signUpData[SignUpDataKey.NAME]}
						name={SignUpDataKey.NAME}
						placeholder="Abcd"
						className="input signUp-form-input--field"
						onChange={handleSignUpDataForm}
					/>
				</div>
				<div className="signUp-form-input--container">
					<label className="signUp-form-input--label">Username</label>
					<input
						type="text"
						value={signUpData[SignUpDataKey.USERNAME]}
						name={SignUpDataKey.USERNAME}
						placeholder="abcd@xyz"
						className="input signUp-form-input--field"
						onChange={handleSignUpDataForm}
					/>
				</div>
				<div className="signUp-form-input--container">
					<label className="signUp-form-input--label">Email</label>
					<input
						type="email"
						value={signUpData[SignUpDataKey.EMAIL]}
						name={SignUpDataKey.EMAIL}
						placeholder="abcd@xyz.com"
						className="input signUp-form-input--field"
						onChange={handleSignUpDataForm}
					/>
				</div>
				<div className="signUp-form-input--container">
					<label className="signUp-form-input--label">Password</label>
					<input
						type="password"
						value={signUpData[SignUpDataKey.PASSWORD]}
						name={SignUpDataKey.PASSWORD}
						placeholder="Enter your password"
						className="input signUp-form-input--field"
						onChange={handleSignUpDataForm}
					/>
				</div>
				<div className="signUp-form-input--container">
					<label className="signUp-form-input--label">
						Confirm Password
					</label>
					<input
						type="password"
						value={signUpData[SignUpDataKey.CONFIRM_PASSWORD]}
						name={SignUpDataKey.CONFIRM_PASSWORD}
						placeholder="Confirm your password"
						className="input signUp-form-input--field"
						onChange={handleSignUpDataForm}
					/>
				</div>
				<p className="signUp-form--error">
					{signUpApiResponse.errorMessage}
				</p>
				<p className="signUp-form--success">
					{signUpApiResponse.response?.message ?? ""}
				</p>
				<div className="button signUp-form-input--submit-button">
					{signUpApiResponse.isLoading ? (
						<p>Loading</p>
					) : (
						<input type="submit" value="Sign Up" />
					)}
				</div>
			</form>
		</div>
	);
};

export default SignUp;
