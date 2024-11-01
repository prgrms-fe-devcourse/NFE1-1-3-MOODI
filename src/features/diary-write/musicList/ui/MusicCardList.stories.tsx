// MusicCardList.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MusicCardList } from './MusicCardList';
import { SEARCH_TYPE } from '@/features/diary-write/search-mode-selector/model/type';
import { MusicItem } from '@/entities/music/model/type';

const meta = {
    title: 'Features/DiaryWrite/MusicCardList',
    component: MusicCardList,
    tags: ['autodocs']
} satisfies Meta<typeof MusicCardList>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleMusicList: MusicItem[] = [
    {
        title: "Sample Music 1",
        thumbnailUrl: "thumbnail_url_1",
        artist: "Artist 1",
        youtubeId: "video_id_1"
    },
    {
        title: "Sample Music 2",
        thumbnailUrl: "thumbnail_url_2",
        artist: "Artist 2",
        youtubeId: "video_id_2"
    }
];

export const GptSearchMode: Story = {
    args: {
        type: 'gptSearch',
        responseMusicList: sampleMusicList,
        selectedMusic: null,  // 추가
        onChange: (music) => console.log('Selected music:', music)  // 추가
    }
};

export const UserSearchMode: Story = {
    args: {
        type: 'userSearch',
        responseMusicList: sampleMusicList,
        selectedMusic: null,  // 추가
        onChange: (music) => console.log('Selected music:', music)  // 추가
    }
};

export const EmptyList: Story = {
    args: {
        type: 'userSearch',
        responseMusicList: [],
        selectedMusic: null,  // 추가
        onChange: (music) => console.log('Selected music:', music)  // 추가
    }
};