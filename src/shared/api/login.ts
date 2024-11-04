import { LoginParams } from '../../features/login/model/LoginParms';
import { LoginType } from '@/features/login/model/LoginType';
import defaultApi from '@/shared/api/api';

const api = defaultApi();

export const login = async (params: LoginParams): Promise<LoginType> => {
    const response = await api.post('/login', { ...params });
    return response.data;
};
