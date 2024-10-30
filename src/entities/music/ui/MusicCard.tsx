import React from 'react';
import {
    Container,
    ThumbnailContainer,
    Thumbnail,
    StyledImg,
    TextWrap,
    Title,
    Artist,
    IconWrapper
} from './MusicCard.styled';
import { MusicCardProps } from '../model/type';

export const MusicCard = ({
    youtubeId,
    thumbnailUrl,
    title,
    artist,
    $isPlaying = false,
    onPlay,
    onClick,
    $isSelected = false
}: MusicCardProps) => {
    /**
     * 이벤트 버블링을 막아서 썸네일을 클릭했을 때는 노래 재생만 처리합니다.
     * @param e
     */
    const handlePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onPlay) {
            onPlay(youtubeId);
        }
    };
    return (
        <Container onClick={onClick} $isSelected={$isSelected}>
            <ThumbnailContainer>
                <Thumbnail $isPlaying={$isPlaying} onClick={handlePlay}>
                    <StyledImg src={thumbnailUrl} alt={title} />
                    <IconWrapper $show>
                        {$isPlaying ? (
                            <span className="material-symbols-outlined">
                                pause
                            </span>
                        ) : (
                            <span className="material-symbols-outlined">
                                play_arrow
                            </span>
                        )}
                    </IconWrapper>
                </Thumbnail>
            </ThumbnailContainer>
            <TextWrap>
                <Title>{title}</Title>
                <Artist>{artist}</Artist>
            </TextWrap>
        </Container>
    );
};
