import { AxiosError } from 'axios';
import defaultApi from '@/shared/api/api';

const api = defaultApi();

/**
 * 이메일 중복 여부를 확인하는 유틸리티 함수
 * @param {string} email - 확인할 이메일 주소
 * @returns {Promise<{ exists: boolean, message: string }>} - 이메일 중복 여부와 메시지
 * @throws {Error} - 서버 에러 또는 네트워크 오류 발생 시 에러를 던짐
 */
export const checkEmailExists = async (
    email: string
): Promise<{ exists: boolean; message: string }> => {
    try {
        const response = await api.post('/check-username', { email });
        const { exists, message } = response.data;
        return { exists, message };
    } catch (error: unknown) {
        if (error instanceof AxiosError && error.response) {
            const serverMessage =
                error.response.data.message || '서버 에러가 발생했습니다.';
            throw new Error(serverMessage);
        }
        throw new Error('네트워크 오류가 발생했습니다.');
    }
};
