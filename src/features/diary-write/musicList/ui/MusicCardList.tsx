import React, { useEffect, useState } from 'react';
import {
    Container,
    HiddenYoutubeContainer,
    Loading
} from './MusicCardList.styled';
import { MusicItem, MusicCardListProps } from '../model/type';
import { EmptyMusicCard, MusicCard } from '../../../../entities/music';
import { ScaleLoader } from 'react-spinners';

export const MusicCardList = ({
    responseMusicList,
    selectedMusic,
    onChange,
    isLoading
}: MusicCardListProps) => {
    const [nowPlaying, setNowPaying] = useState<string | null>(null);

    /**
     * iframe에 비디오 아이디를 셋팅합니다.
     * @param videoId :string
     */
    const handlePlay = (youtubeId: string) => {
        if (nowPlaying === youtubeId) {
            setNowPaying(null);
            console.log('노래 재생 중지');
        } else {
            setNowPaying(youtubeId);
            console.log('노래 재생 중 : ', youtubeId);
        }
    };

    /**
     * 사용자가 선택한 음악 정보를 리스트로 전달
     * @param item :MusicItem 클릭한 카드 컴포넌트 음악 정보
     */
    const handleClick = (item: MusicItem) => {
        const isAlreadySelected = selectedMusic?.youtubeId === item.youtubeId;
        if (isAlreadySelected) {
            onChange(null);
        } else {
            onChange(item);
        }
    };

    const renderMusicList = () => {
        if (isLoading) {
            return (
                <Loading>
                    <ScaleLoader color="#dbdbdb" />
                </Loading>
            );
        }

        return responseMusicList.map((music) => (
            <MusicCard
                key={`${music.youtubeId}-${music.title}`}
                youtubeId={music.youtubeId}
                thumbnailUrl={music.thumbnailUrl}
                title={music.title}
                artist={music.artist}
                $isPlaying={nowPlaying === music.youtubeId}
                onPlay={handlePlay}
                onClick={() => handleClick(music)}
                $isSelected={selectedMusic?.youtubeId === music.youtubeId}
            />
        ));
    };

    return (
        <Container>
            <HiddenYoutubeContainer>
                {nowPlaying && (
                    <iframe
                        title="YouTube music player"
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${nowPlaying}?autoplay=1`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                )}
            </HiddenYoutubeContainer>
            {renderMusicList()}
        </Container>
    );
};
