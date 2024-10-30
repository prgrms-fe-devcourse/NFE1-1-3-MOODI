import type { Meta, StoryObj } from '@storybook/react';
import { MusicCardList } from './MusicCardList';
import { MusicItem } from '../model/type';
import { http, HttpResponse } from 'msw';

const meta: Meta<typeof MusicCardList> = {
    title: 'features/diary-write/MusicCardList',
    component: MusicCardList,
    tags: ['autodocs'],
    parameters: {
        msw: {
            handlers: [
                http.get('/search', () => {
                    return HttpResponse.json({
                        title: '테스트 곡',
                        artist: '테스트 아티스트',
                        thumbnailUrl: 'https://via.placeholder.com/300',
                        youtubeId: 'test-youtube-id'
                    })
                }),
            ],
        },
    },
};

export default meta;
type Story = StoryObj<typeof MusicCardList>;

const responseMusicList = [
    '뉴진스 supernatural',
    '에스파 spicy',
    '아이브 love dive'
];

// GPT
export const GPT: Story = {
    args: {
        type: "gpt",
        responseMusicList: responseMusicList,
        onChange: (music) => console.log('선택된 음악:', music),
    },
};

// 사용자 검색
export const UserSearch: Story = {
    args: {
        type: "userSearch",
        responseMusicList: responseMusicList,
        onChange: (music) => console.log('선택된 음악:', music),
    },
};

// 로딩
export const Loading: Story = {
    args: {
        type: "gpt",
        responseMusicList: responseMusicList,
        onChange: (music) => console.log('선택된 음악:', music),
    },
    parameters: {
        msw: {
            handlers: [
                http.get('/search', async () => {
                    await new Promise((resolve) => setTimeout(resolve, 3000)); // 3초 지연
                    return HttpResponse.json({
                        title: '로딩 테스트 곡',
                        artist: '로딩 테스트 아티스트',
                        thumbnailUrl: 'https://via.placeholder.com/300',
                        youtubeId: 'loading-test-id'
                    })
                }),
            ],
        },
    },
};

// 에러
export const Error: Story = {
    args: {
        type: "gpt",
        responseMusicList: responseMusicList,
        onChange: (music) => console.log('선택된 음악:', music),
    },
    parameters: {
        msw: {
            handlers: [
                http.get('/search', () => {
                    return HttpResponse.error();
                }),
            ],
        },
    },
};

// 빈 리스트
export const EmptyList: Story = {
    args: {
        type: "gpt",
        responseMusicList: [],
        onChange: (music) => console.log('선택된 음악:', music),
    },
};