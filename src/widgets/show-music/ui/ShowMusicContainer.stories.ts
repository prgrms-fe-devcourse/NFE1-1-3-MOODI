import type { Meta, StoryObj } from '@storybook/react';
import { ShowMusicContainer } from './ShowMusicContainer';

const meta: Meta<typeof ShowMusicContainer> = {
    title: 'Widgets/UI/ShowMusicContainer',
    component: ShowMusicContainer,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ShowMusicContainer>;

export const Default: Story = {
    args: {
        youtubeId: 'ArmDp-zijuc',
        thumbnailUrl:
            'https://i.scdn.co/image/ab67616d0000b2730744690248ef3ba7b776ea7b',
        title: 'Super Shy',
        artist: 'NewJeans'
    }
};
