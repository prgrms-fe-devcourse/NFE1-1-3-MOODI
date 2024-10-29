import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

const baseUrl = process.env.REACT_APP_API_URL as string;

const defaultApi = (option?: AxiosRequestConfig): AxiosInstance => {
    const instance = axios.create({ baseURL: baseUrl, ...option });
    return instance;
};

export default defaultApi;
