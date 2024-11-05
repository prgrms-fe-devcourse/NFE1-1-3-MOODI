import React, { useState } from 'react';
import {
    Container,
    SubContainer,
    HiddenYoutubeContainer
} from './ShowMusicContainer.styled';
import { ShowMusicContainerProps } from '../model/type';
import { MusicCard } from '@/entities/music';
import { YoutubeButton } from './YoutubeButton';

export const ShowMusicContainer = ({
    youtubeId,
    thumbnailUrl,
    title,
    artist
}: ShowMusicContainerProps) => {
    const [nowPlaying, setNowPaying] = useState<string | null>(null);

    const handlePlay = (id: string) => {
        if (nowPlaying === id) {
            setNowPaying(null);
            console.log('노래 재생 중지');
        } else {
            setNowPaying(id);
            console.log('노래 재생 중 : ', id);
        }
    };

    return (
        <Container>
            노래
            <SubContainer>
                <HiddenYoutubeContainer>
                    {nowPlaying && (
                        <iframe
                            title="YouTube music player"
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    )}
                </HiddenYoutubeContainer>
                <MusicCard
                    youtubeId={youtubeId}
                    thumbnailUrl={thumbnailUrl}
                    title={title}
                    artist={artist}
                    $isPlaying={nowPlaying === youtubeId}
                    onPlay={handlePlay}
                    onClick={() => {}}
                />
                <YoutubeButton
                    youtubeUrl={`https://www.youtube.com/watch?v=${youtubeId}`}
                />
            </SubContainer>
        </Container>
    );
};
