import React, { useEffect, useState } from 'react';
import { Container, HiddenYoutubeContainer } from './MusicCardList.styled';
import { MusicItem, MusicCardListProps } from '../model/type';
import { EmptyMusicCard, MusicCard } from '../../../../entities/music';
import useMusicStore from '@/entities/music/model/useMusicStore';

export const MusicCardList = ({
    responseMusicList
    // onChange
}: MusicCardListProps) => {
    const [nowPlaying, setNowPaying] = useState<string | null>(null);
    const { selectedMusic, setSelectedMusic, clearSelectedMusic } =
        useMusicStore();

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
     * 사용자가 선택한 음악 정보를 셋팅합니다.
     * @param item :MusicItem 클릭한 카드 컴포넌트 음악 정보
     */
    const handleClick = (item: MusicItem) => {
        if (item === selectedMusic) {
            clearSelectedMusic();
        } else {
            setSelectedMusic(item);
        }
    };

    // TODO - iframe 유튜브 api 모듈로 변경
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
            {responseMusicList.length === 0 &&
            responseMusicList !== undefined ? (
                <EmptyMusicCard />
            ) : (
                responseMusicList.map((music) => (
                    <MusicCard
                        key={`${music.youtubeId}-${music.title}`}
                        youtubeId={music.youtubeId}
                        thumbnailUrl={music.thumbnailUrl}
                        title={music.title}
                        artist={music.artist}
                        $isPlaying={nowPlaying === music.youtubeId}
                        onPlay={handlePlay}
                        onClick={() => handleClick(music)}
                        $isSelected={
                            selectedMusic?.youtubeId === music.youtubeId
                        }
                    />
                ))
            )}
        </Container>
    );
};
