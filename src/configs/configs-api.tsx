import axios from "axios";
import store from "./configs-redux";

const BASE_URL: string = "http://192.85.50.37:8080/";
const BASE_MOCK_API_URL: string = "https://5eac13dd4bf71e00166a0487.mockapi.io/";
const api = axios.create({
    baseURL: BASE_URL,
    timeout: 2000,
    headers: {
        Accept: "application/json",
    },
});
const getAccessToken = () => {
    let authorization = {
        token: `Basic UVJDT0RFX0lEOlFSX0NMSUVOVA==`,
        url: BASE_URL,
    };
    if (store && store.getState() && store.getState().LoginReducer.access_token) {
        authorization.token = `Bearer ${store.getState().LoginReducer.access_token}`;
        authorization.url = BASE_MOCK_API_URL;
    }
    // Hard code
    authorization.url = BASE_MOCK_API_URL;
    return authorization;
};
const Api = () => {
    const accessToken = getAccessToken();
    api.defaults.headers.common['Authorization'] = accessToken.token;
    api.defaults.baseURL = accessToken.url;
    return api;
};
export default Api();
api.interceptors.request.use(
    (res: any) => {
        return res;
    },
    (err: any) => {
        return Promise.reject(err);
    }
);
api.interceptors.response.use(
    (res: any) => {
        if (res.status === 401) {
        }
        return res;
    },
    (err: any) => {
        return Promise.reject(err);
    }
);
