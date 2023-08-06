import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const useCurrentUser = () => {
	const [user, setUser] = useState<any>(null);

	useEffect(() => {
		const currentUser = Cookies.get("loginInfo");
		if (currentUser) {
			setUser(JSON.parse(currentUser));
		}
	}, []);

	const logout = async () => {
		setUser(null);
		Cookies.remove("loginInfo");
	};

	return { user, logout };
};

export default useCurrentUser;
