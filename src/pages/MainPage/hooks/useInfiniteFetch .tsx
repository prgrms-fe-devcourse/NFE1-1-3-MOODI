import { useInfiniteQuery } from '@tanstack/react-query';

const fetchTimeline = async (page: number) => {
    const response = await fetch(
        `https://td3axvf8x7.execute-api.ap-northeast-2.amazonaws.com/moodi/diary?limit=10&sort_by=lastest&page=${page}`
    );
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
};

export const useInfiniteFetch = () => {
    return useInfiniteQuery({
        queryKey: ['timeline'],
        queryFn: ({ pageParam = 1 }) => {
            return fetchTimeline(Number(pageParam));
        },
        getNextPageParam: (last) => {
            if (last.page < last.totalPages) {
                return last.page + 1;
            }
            return undefined;
        },
        initialPageParam: 1
    });
};
