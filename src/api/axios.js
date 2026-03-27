import axios from "axios";
import { useAuthStore } from "../store/authStore";
import { normalizeApiError } from "../lib/nomalizeApiError";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
});

const refreshClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})


axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = useAuthStore.getState().accessToken;
        if (accessToken) { 
            config.headers = config.headers ?? {};
            config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config
    },

    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => { 
        const originalRequest = error?.config;

        if (error?.response?.status === 401 && originalRequest && !originalRequest._retry) {
            originalRequest._retry = true


            try {

                const response = await refreshClient.post('/api/auth/refresh');
                const accessToken = response?.data?.data?.accessToken;
                const user = response?.data?.data?.user;

                if (accessToken && user) {
                    useAuthStore.getState().setSession({accessToken , user});
                    originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                    return axiosInstance(originalRequest);
                }

                useAuthStore.getState().clearSession();
                return Promise.reject(error)


            } catch (refreshError) {
                useAuthStore.getState().clearSession();
                return Promise.reject(refreshError)
                

            }
        }
        return Promise.reject(error)
    }

);


export const request = async (promise) => {
    try {
        const response = await promise;
        return response.data;
    } catch (error) {
        throw normalizeApiError(error)
    }
}