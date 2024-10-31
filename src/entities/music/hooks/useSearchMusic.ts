// import { useQuery } from '@tanstack/react-query';
// import { searchMusic } from '../api/fetchMusicList';

// export const useSearchMusic = (query: string) => {
//     return useQuery({
//         queryKey: ['music-search', query],
//         queryFn: () => searchMusic(query),
//         enabled: !!query,
//         staleTime: 10 * 60 * 1000,
//         gcTime: 30 * 60 * 1000,
//         retry: 2
//     });
// };
