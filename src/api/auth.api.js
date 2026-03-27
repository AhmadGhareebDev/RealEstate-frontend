import { axiosInstance , request } from "./axios";

const toFormData = (payload) => {
  const fd = new FormData();
  Object.entries(payload || {}).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    fd.append(key, value);
  });
  return fd;
};


export const authApis = {
    registerClient: (payload) => {
        const formData = toFormData(payload)
        return request(axiosInstance.post('/api/auth/signup', formData))
    },
    registerAgent: (payload) => {
        const formdata = toFormData(payload)
        return request(axiosInstance.post('/api/auth/signup/agent', formdata))
    },
    login: (payload) => {
        const formData = toFormData(payload)
        return request(axiosInstance.post('/api/auth/login', formData))
    },
    verifyEmail: (payload) => request(axiosInstance.post('/api/auth/verify-email', payload)),
    resendVerification: (payload) => request(axiosInstance.post('/api/auth/resend-verification', payload)),
    refresh: () => request(axiosInstance.post('/api/auth/refresh')),
    logout: () => request(axiosInstance.post('/api/auth/logout'))
        
}