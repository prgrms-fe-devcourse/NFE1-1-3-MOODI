import { DiaryQueryParamsType } from '../model/diaryQueryParamType';
import defaultApi from '@/shared/api/api';
import {
    DiaryData,
    DiaryType,
    EmotionData,
    MusicData,
    PostDiaryType
} from '../model/diaryType';

const api = defaultApi();

/**
 * 일기와 관련된 정보를 불러옵니다.
 * @param page 불러온 데이터의 페이지를 나타냅니다.
 * @param limit 불러올 데이터의 페이지가 불러올 최대 숫자를 정의합니다.
 * @param user_email 해당 이메일과 일치하는 사용자 이메일을 가져옵니다.
 * @param is_public 비공개 유무를 기반으로 가져옵니다.
 * @param sort_by 정렬 기준을 정의합니다.
 * @param month 해당 월을 기준으로 데이터를 가져옵니다.
 * @param year 해당 년을 기준으로 데이터를 가져옵니다.
 * @param week 해당 주를 기준으로 데이터를 가져옵니다.
 */

export const getDiaryApi = async (
    params: DiaryQueryParamsType
): Promise<DiaryType | null> => {
    try {
        const queryParams: DiaryQueryParamsType = {
            ...(params.page && { page: params.page }),
            ...(params.limit && { limit: params.limit }),
            ...(params.user_email && { user_email: params.user_email }),
            ...(params.is_public !== undefined && {
                is_public: params.is_public
            }),
            ...(params.sort_by && { sort_by: params.sort_by }),
            ...(params.month && { month: params.month }),
            ...(params.year && { year: params.year }),
            ...(params.year && { year: params.week })
        };

        const response = await api.get('/diary', {
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

/**
 * 일기를 저장합니다.
 * @param diaryData
 * @returns
 */
export const postDiaryApi = async (diary: PostDiaryType) => {
    try {
        const response = await api.post('/diary', diary, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            alert(error.message);
        }
        return null;
    }
};
