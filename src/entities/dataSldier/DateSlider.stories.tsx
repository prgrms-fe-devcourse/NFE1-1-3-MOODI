// Storybook configuration for DateSlider
import type { Meta, StoryObj } from '@storybook/react';
import DateSlider from "./DateSlider"
const meta: Meta<typeof DateSlider> = {
    component: DateSlider,
    title: 'entities/ui/DateSlider',
    tags: ['autodocs'],
    argTypes: {
        year: { control: 'number', defaultValue: 2023 },
        month: { control: 'number', defaultValue: 10 },
        week: { control: 'number', defaultValue: 1 },
        viewMode: { control: 'radio', options: ['week', 'month'], defaultValue: 'week' },
        onDateChange: { action: 'dateChanged' },
    },
};
export default meta;

type Story = StoryObj<typeof DateSlider>;

export const Default: Story = {
    args: {
        year: 2023,
        month: 10,
        week: 1,
        viewMode: 'week',
    },
};
