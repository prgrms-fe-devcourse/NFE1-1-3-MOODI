/* eslint-disable import/no-extraneous-dependencies */
import { http, HttpResponse } from 'msw';
import { MusicItem } from '../../../entities/music/model/type';

const mockMusicData: MusicItem = {
    title: '테스트 음악',
    artist: '테스트 아티스트',
    thumbnailUrl: 'https://via.placeholder.com/300',
    youtubeId: 'test-youtube-id'
};

export const handlers = [
    http.get('/search', async () => {
        return HttpResponse.json(mockMusicData, {
            status: 200,
            statusText: 'OK'
        });
    }),

    http.get('/search-error', async () => {
        return HttpResponse.json(
            { message: '에러가 발생했습니다' },
            { status: 500 }
        );
    })
];
