import { useInfiniteQuery } from '@tanstack/react-query';

const fetchTimeline = async (page: number, sort: string, email: string) => {
    const response = await fetch(
        `https://td3axvf8x7.execute-api.ap-northeast-2.amazonaws.com/moodi/diary?limit=10&sort_by=${sort}&page=${page}&user_email=${email}`
    );
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
};

export const useInfiniteFetch = (sort: string, email: string) => {
    return useInfiniteQuery({
        queryKey: ['timeline', sort, email],
        queryFn: ({ pageParam = 1 }) => {
            return fetchTimeline(Number(pageParam), sort, email);
        },
        getNextPageParam: (last) => {
            if (last.page < last.totalPages) {
                return last.page + 1;
            }
            return undefined;
        },
        initialPageParam: 1,
        refetchOnMount: true,
        // sort가 변경될 때마다 새로운 쿼리로 인식하도록 설정
        gcTime: 0,
        staleTime: 0
    });
};
