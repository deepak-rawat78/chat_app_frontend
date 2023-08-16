import axiosService from "@/axios/axiosService";
import endpoints from "@/axios/endpoints";

export const addContactApi = async (body: any) => {
	return await axiosService.post(endpoints.addContact, body);
};

export const getUserContactListApi = async (params: any) => {
	return await axiosService.get(endpoints.getContactList, params, true);
};
