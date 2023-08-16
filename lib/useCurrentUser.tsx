import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axiosService from "@/axios/axiosService";

const useCurrentUser = () => {
	const [user, setUser] = useState<any>(null);

	useEffect(() => {
		const currentUser = Cookies.get("loginInfo");
		if (currentUser) {
			let userData = JSON.parse(currentUser);
			axiosService.setToken(userData?.accessToken);
			setUser(userData);
		}
	}, []);

	const logout = async () => {
		setUser(null);
		Cookies.remove("loginInfo");
	};

	return { user, logout };
};

export default useCurrentUser;
