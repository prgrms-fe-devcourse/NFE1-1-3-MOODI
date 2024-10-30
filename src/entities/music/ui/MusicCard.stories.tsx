import type { Meta, StoryObj } from '@storybook/react';
import {MusicCard} from './MusicCard';

const meta: Meta<typeof MusicCard> = {
    title: 'entities/music/MusicCard',
    component: MusicCard,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MusicCard>;

// 이미지 테스트
const sampleImageUrl = "/samplecover.jpg";

export const Default: Story = {
    args: {
        thumbnailUrl: sampleImageUrl,
        title: "Supernatural",
        artist: "뉴진스",
        isPlaying: false,
        onPlay: () => {},
    },
};

export const Playing: Story = {
    args: {
        thumbnailUrl: sampleImageUrl,
        title: "뉴진스",
        artist: "Supernatural",
        isPlaying: true,
        onPlay: () => {},
    },
};