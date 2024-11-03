import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
    title: 'Widgets/UI/DatePicker',
    component: DatePicker,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
    args: {
        onSelectDate: (date) => console.log('선택된 날짜:', date)
    }
};
