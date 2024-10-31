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

export const GPTRecommend: Story = {
    args: {
        type: SEARCH_TYPE.GPT,
        responseMusicList: sampleMusicList,
        // onChange: (item: MusicItem) => console.log('Selected:', item)
    }
};

export const UserSearch: Story = {
    args: {
        type: SEARCH_TYPE.USER,
        responseMusicList: sampleMusicList,
        // onChange: (item: MusicItem) => console.log('Selected:', item)
    }
};

export const Empty: Story = {
    args: {
        type: SEARCH_TYPE.USER,
        responseMusicList: [],
        // onChange: (item: MusicItem) => console.log('Selected:', item)
    }
};