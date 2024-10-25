import useGetDiaries from '../../../shared/hooks/useGetDiaries';

export const usecalendarDataFetch = async (activeMonth: string) => {
    const split = activeMonth.split('-');
    const { data, isLoading, error } = useGetDiaries({
        page: 1,
        limit: 10,
        user_email: 'user@example.com',
        is_public: 1,
        sort_by: 'latest',
        month: 10,
        year: 2024
    });
};
