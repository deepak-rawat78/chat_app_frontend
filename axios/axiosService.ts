import axios from "axios";
import endpoints from "./endpoints";

export const BASE_URL = "http://localhost:8000/chat_app";

axios.defaults.baseURL = BASE_URL;

axios.defaults.headers.common["Content-Type"] = "application/json";

// Add a request interceptor
axios.interceptors.request.use(
	function (config) {
		console.log(config, "intercept request");

		// Do something before request is sent
		return config;
	},
	function (error) {
		console.log(error, "intercept request error");

		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
axios.interceptors.response.use(
	function (response) {
		console.log(response, "intercept response");

		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response;
	},
	function (error) {
		console.log(error, "intercept response error");

		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);
	}
);

const AxiosService = () => {
	let token = "";
	const setToken = (value: string) => {
		token = value;
	};

	const get = (endpoint: string, params: any, useToken: boolean) => {
		let headers = {};
		if (useToken) {
			headers = {
				Authorization: token,
			};
		}
		return axios.get(endpoint, {
			params,
			headers,
		});
	};

	const post = (endpoint: string, body: any) => {
		console.log(token, "token");

		return axios.post(
			endpoint,
			{ ...body },
			{
				headers: {
					Authorization: token,
				},
			}
		);
	};
	return {
		get,
		setToken,
		post,
	};
};

export default AxiosService();
