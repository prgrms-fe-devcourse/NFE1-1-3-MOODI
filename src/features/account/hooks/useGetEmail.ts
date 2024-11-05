import getEmail from '../api/getEmail';
import { GetEmailParamsType } from '../model/getEmailParamsType';
import { GetEmailResponseType } from '../model/getEmailResponseType';
import { useQuery } from '@tanstack/react-query';

const useGetEmail = (params: GetEmailParamsType, enabled: boolean) => {
    const { data, isLoading, error } = useQuery<GetEmailResponseType>({
        queryKey: ['moodi', params],
        queryFn: () => getEmail(params),
        enabled
    });
    return { data, isLoading, error };
};

export default useGetEmail;
