import React from 'react';
import { YoutubeButtonContainer } from './YoutubeButton.styled';

interface YoutubeButtonProps {
    youtubeUrl: string;
}

export const YoutubeButton = ({ youtubeUrl }: YoutubeButtonProps) => {
    return (
        <YoutubeButtonContainer
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
        >
            Youtube 바로가기
        </YoutubeButtonContainer>
    );
};
