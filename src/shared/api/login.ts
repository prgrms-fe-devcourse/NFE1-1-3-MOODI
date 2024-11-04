import { LoginParams } from '../../features/login/model/LoginParms';
import { LoginType } from '@/features/login/model/LoginType';
import axios from 'axios';

export const login = async (params: LoginParams): Promise<LoginType> => {
    const response = await axios.post('/login', { ...params });
    return response.data;
};
