import { LoginParams } from '../../features/login/model/LoginParms';
import { LoginType } from '@/features/login/model/LoginType';
import defaultApi from '@/shared/api/api';
import { AxiosError } from 'axios';

const api = defaultApi();

export const login = async (params: LoginParams): Promise<LoginType> => {
    try {
        const response = await api.post('/login', { ...params });
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
