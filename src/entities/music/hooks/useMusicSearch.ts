import { useQuery } from '@tanstack/react-query';
import { spotifySearch, youtubeSearch } from '../api/fetchMusicList';
import { MusicItem } from '../model/type';

// TODO - 쿼리 유효성 검사 / 훅이 여러번 실행되는 문제 해결

/**
 * 검색 훅
 * @param query
 * @returns
 */
export const useMusicSearch = (query: string) => {
    const spotifyQuery = useQuery({
        queryKey: ['spotify', query],
        queryFn: () => spotifySearch(query),
        enabled: !!query,
        staleTime: 1000 * 60 * 5, // 5분
        gcTime: 1000 * 60 * 30, // 30분
        refetchOnWindowFocus: false, // 윈도우 포커스 할 때 자동 리패치 옵션 제거
        retry: 1 // 1회 재시도
    });

    const youtubeQuery = useQuery({
        queryKey: [
            'youtube',
            spotifyQuery.data?.name,
            spotifyQuery.data?.artists[0].name
        ],
        queryFn: () =>
            youtubeSearch({
                trackName: spotifyQuery.data!.name,
                artistName: spotifyQuery.data!.artists[0].name
            }),
        enabled:
            !!spotifyQuery.data?.name &&
            !!spotifyQuery.data?.artists?.[0]?.name,
        staleTime: 1000 * 60 * 5, // 5분
        gcTime: 1000 * 60 * 30, // 30분
        refetchOnWindowFocus: false, // 윈도우 포커스 할 때 자동 리패치 옵션 제거
        retry: 1 // 1회 재시도
    });

    const combinedData =
        spotifyQuery.data && youtubeQuery.data
            ? {
                  title: spotifyQuery.data?.name,
                  artist: spotifyQuery.data?.artists[0].name,
                  thumbnailUrl: spotifyQuery.data?.album.images[0].url,
                  //   youtubeId: 'M5aEiDSx7kI' // api 호출 제한 상황용 테스트 ID
                  youtubeId: youtubeQuery.data
              }
            : undefined;

    return {
        data: combinedData as MusicItem,
        isLoading: spotifyQuery.isLoading || youtubeQuery.isLoading,
        error: spotifyQuery.error || youtubeQuery.error,
        spotifyStatus: spotifyQuery.status,
        youtubeStatus: youtubeQuery.status
    };
};
