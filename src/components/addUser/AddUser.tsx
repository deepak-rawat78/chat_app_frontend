import React from "react";
import { AddUserProp } from "./typings";
import "./addUser.css";

const AddUser = (props: AddUserProp) => {
	const { onChangeValue, onClickSave, value } = props;

	const handleTextChange = (e: any) => {
		e.preventDefault();
		onChangeValue && onChangeValue(e.target.value);
	};

	return (
		<div className="addUser-container">
			<input
				type="text"
				value={value}
				placeholder="Type username here..."
				className="addUser-input"
				onChange={handleTextChange}
			/>
			<button
				type="button"
				className="adduser-input--button"
				onClick={onClickSave}
			>
				Save
			</button>
		</div>
	);
};

export default AddUser;
