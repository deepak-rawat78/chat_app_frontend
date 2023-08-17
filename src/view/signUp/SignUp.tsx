"use client";
import React, { useState } from "react";
import { SignUpDataKey, SignUpProps } from "./typings";
import "./signUp.css";

const SignUp = (props: SignUpProps) => {
	const [signUpData, setSignUpData] = useState({
		[SignUpDataKey.EMAIL]: "",
		[SignUpDataKey.USERNAME]: "",
		[SignUpDataKey.PASSWORD]: "",
		[SignUpDataKey.CONFIRM_PASSWORD]: "",
	});

	const handleSignUpDataForm = (e: any) => {
		e.preventDefault();
		setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
	};

	const handleClickOnSubmit = (e: any) => {
		e.preventDefault();
		console.log(signUpData, "signUpData");
	};

	return (
		<div className="signUp--container">
			<p className="signUp--title">Sign Up</p>
			<form className="signUp-form" onSubmit={handleClickOnSubmit}>
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
				<input
					type="submit"
					className="button signUp-form-input--submit-button"
					value="Sign Up"
				/>
			</form>
		</div>
	);
};

export default SignUp;
