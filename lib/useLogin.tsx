import axiosService from "@/axios/axiosService";
import endpoints from "@/axios/endpoints";
import Cookie from "js-cookie";

export const useLogin = () => {
	const login = async (email: string, password: string) => {
		try {
			const user = await axiosService.post(endpoints.login, {
				email,
				password,
			});
			if (user.data) {
				Cookie.set("loginInfo", JSON.stringify(user.data));
			}
			return Promise.resolve(user);
		} catch (error) {
			return Promise.reject(error);
		}
	};
	return { login };
};
