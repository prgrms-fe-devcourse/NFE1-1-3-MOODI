import { WeeklyDataType, MonthlyDataType } from '../model/moodTypes';
import { useQuery } from '@tanstack/react-query';
import { moodQueryParamType } from '../model/moodQueryParamType';
import React from 'react';
import { getMoodApi } from '../api/mood';

/**
 * 감정과 관련된 정보를 불러옵니다.
 * @param page 불러온 데이터의 페이지를 나타냅니다.
 * @param limit 불러올 데이터의 페이지가 불러올 최대 숫자를 정의합니다.
 * @param user_email 해당 이메일과 일치하는 사용자 이메일을 가져옵니다.
 */

const useGetMood = (params: moodQueryParamType) => {
    const { data, isLoading, error } = useQuery<
        WeeklyDataType | MonthlyDataType | null
    >({
        queryKey: ['moodi', params],
        queryFn: () => getMoodApi(params)
    });

    return { data, isLoading, error };
};

export default useGetMood;
