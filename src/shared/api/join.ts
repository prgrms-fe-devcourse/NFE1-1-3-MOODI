import { JoinType } from '../../features/join/model/JoinType';
import { JoinParam } from '../../features/join/model/joinParams';
import defaultApi from '@/shared/api/api';
import { AxiosError } from 'axios';

const api = defaultApi();

export const join = async (params: JoinParam): Promise<JoinType> => {
    try {
        const { phoneNumber, ...restParams } = params;
        const modifiedParams = {
            ...restParams,
            phone_number: phoneNumber
        };

        const response = await api.post('/signup', modifiedParams);
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
