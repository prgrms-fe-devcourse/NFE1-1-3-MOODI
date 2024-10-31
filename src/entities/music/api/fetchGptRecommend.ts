import defaultApi from '@/shared/api/api';
import { gptAnswerType, gptQueryParamsType } from '../model/type';

const api = defaultApi();

/**
 * 작성한 일기를 기반으로 gpt api를 이용해 추천된 노래를 반환
 * @param params 일기 내용과 선택한 감정들
 * @returns 음악 리스트 10개
 */
export const fetchGptRecommend = async (
    params: gptQueryParamsType
): Promise<gptAnswerType> => {
    try {
        const response = await api.post('/prediction', params, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.log('GPT 응답 가져오기 실패');
        throw error;
    }
};
