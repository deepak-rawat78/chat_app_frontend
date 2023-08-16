import axiosService from "@/axios/axiosService";

export const loginApi = (url: string, body: any) => {
	return axiosService.post(url, body);
};
