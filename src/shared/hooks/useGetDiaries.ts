import React from 'react';
import { DiaryType } from '../model/diaryType';
import { DiaryQueryParamsType } from '../model/diaryQueryParamType';
import { useQuery } from '@tanstack/react-query';
import { getDiaryApi } from '../api/diary';

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

const useGetDiaries = (params: DiaryQueryParamsType) => {
    const { data, isLoading, error } = useQuery<DiaryType | null>({
        queryKey: ['moodi', params],
        queryFn: () => getDiaryApi(params)
    });

    return { data, isLoading, error };
};

export default useGetDiaries;
