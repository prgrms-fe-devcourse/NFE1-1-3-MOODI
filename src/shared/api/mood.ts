import { WeeklyDataType, MonthlyDataType } from '../model/conditionTypes';
import { moodQueryParamType } from '../model/moodQueryParamType';
import defaultApi from '@/shared/api/api';

const api = defaultApi();

/**
 * 감정과 관련된 정보를 불러옵니다.
 * @param page 불러온 데이터의 페이지를 나타냅니다.
 * @param limit 불러올 데이터의 페이지가 불러올 최대 숫자를 정의합니다.
 * @param user_email 해당 이메일과 일치하는 사용자 이메일을 가져옵니다.
 */

export const getMoodApi = async (
    params: moodQueryParamType
): Promise<WeeklyDataType | MonthlyDataType | null> => {
    try {
        const queryParams: moodQueryParamType = {
            year: params.year,
            month: params.month,
            ...(params.week && { week: params.week })
        };
        const response = await api.get('/mood', {
            params: queryParams,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            // 디버깅용 차후에 toast로 교체
            alert(error.message);
        }
        return null;
    }
};
