import axiosService from "@/axios/axiosService";
import endpoints from "@/axios/endpoints";

export const loginApi = (url: string, body: any) => {
	return axiosService.post(url, body);
};

export const signUpApi = (body: any) => {
	return axiosService.post(endpoints.signUp, body);
};
