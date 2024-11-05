import { getUserByEmail } from '@/shared/api/user';
import { GetUserByEmailParamsType, UserType } from '@/shared/model/userTypes';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useGetUser = (params: GetUserByEmailParamsType) => {
    const { data, isLoading, error } = useQuery<UserType>({
        queryKey: ['moodi', params],
        queryFn: () => getUserByEmail(params)
    });
    return { data, isLoading, error };
};

export default useGetUser;
