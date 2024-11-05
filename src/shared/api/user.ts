import {
    PatchUserResponseType,
    UserType,
    GetUserByEmailParamsType,
    GetUserByEmailResponseType,
    PatchUserParmasType
} from '../model/userTypes';

import { AxiosError } from 'axios';
import defaultApi from './api';

const api = defaultApi();

export const getUserByEmail = async (
    params: GetUserByEmailParamsType
): Promise<UserType> => {
    try {
        const response = await api.get<GetUserByEmailResponseType>(
            '/get-user-by-email',
            {
                params: {
                    email: params.email
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.data.user;
    } catch (error: unknown) {
        if (error instanceof AxiosError && error.response) {
            const serverMessage =
                error.response.data.message || '서버 에러가 발생했습니다.';
            throw new Error(serverMessage);
        }
        throw new Error('네트워크 오류가 발생했습니다.');
    }
};

export const updateUser = async (
    params: PatchUserParmasType
): Promise<PatchUserResponseType> => {
    try {
        const response = await api.patch<PatchUserResponseType>(
            'update-user-by-email',
            params,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.data;
    } catch (error: unknown) {
        if (error instanceof AxiosError && error.response) {
            const serverMessage =
                error.response.data.message || '서버 에러가 발생했습니다.';
            throw new Error(serverMessage);
        }
        throw new Error('네트워크 오류가 발생했습니다.');
    }
};
