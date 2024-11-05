import defaultApi from '@/shared/api/api';
import React from 'react';
import { GetEmailParamsType } from '../model/getEmailParamsType';
import { GetEmailResponseType } from '../model/getEmailResponseType';

import { AxiosError } from 'axios';

const api = defaultApi();

const getEmail = async (
    params: GetEmailParamsType
): Promise<GetEmailResponseType> => {
    try {
        const response = await api.get<GetEmailResponseType>(
            'get-user-by-name-and-phone',
            {
                params
            }
        );
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            const serverMessage =
                error.response.data.message || '서버 에러가 발생했습니다.';
            throw new Error(serverMessage);
        }
        throw new Error('네트워크 오류가 발생했습니다.');
    }
};

export default getEmail;
