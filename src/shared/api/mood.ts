import { WeeklyDataType, MonthlyDataType } from '../model/conditionTypes';
import { moodQueryParamType } from '../model/moodQueryParamType';
import defaultApi from '@/shared/api/api';

const api = defaultApi();

/**
 * 감정과 관련된 정보를 불러옵니다.
 * @param year 불러올 감정의 년도
 * @param month 불러올 감정의 달
 * @param week 불러올 감정의 주 , 주를 기준으로 감정을 월별로 가져올지 주별로 가져올지를 판별합니다.
 * @param user_email 해당 이메일과 일치하는 사용자 이메일을 가져옵니다.
 */

export const getMoodApi = async (
    params: moodQueryParamType
): Promise<WeeklyDataType | MonthlyDataType | null> => {
    try {
        const queryParams = {
            year: params.year,
            month: params.month,
            ...(params.week && { week: params.week }),
            author_email: params.user_email
        };
        const response = await api.get('/mood', {
            params: queryParams,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(
            error instanceof Error ? error.message : 'Unknown error'
        );
    }
};
