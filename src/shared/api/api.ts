import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

const baseUrl = process.env.REACT_APP_API_URL as string;

const defaultApi = (option?: AxiosRequestConfig): AxiosInstance => {
    const instance = axios.create({ baseURL: baseUrl, ...option });

    instance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (process.env.NODE_ENV !== 'production') {
                console.error('API Error:', error);
            }
            return Promise.reject(error);
        }
    );
    return instance;
};

export default defaultApi;
