import React, { useEffect, useState } from 'react';
import { Container, HiddenYoutubeContainer } from './MusicCardList.styled';
import { MusicItem, MusicCardListProps } from '../model/type';
import { MusicCard, searchMusic } from '../../../../entities/music';

export const MusicCardList = ({
    type,
    responseMusicList,
    onChange
}: MusicCardListProps) => {
    const [currentMusicItem, setcurrentMusicItem] = useState<MusicItem | null>(
        null
    );
    // TODO : 플레이어는 하나만 둘 거니까 그냥 전역 상태로 관리해도 될 것 같음
    const [nowPlaying, setNowPaying] = useState<string | null>(null);
    const [musicList, setMusicList] = useState<MusicItem[]>([]);

    // 테스트 props 전송
    useEffect(() => {
        if (onChange && currentMusicItem) {
            onChange(currentMusicItem);
        }
    }, [currentMusicItem, onChange]);

    // musicList를 구성하기 위한 musicItem 리스트를 불러옵니다.
    useEffect(() => {
        const fetchMusicData = async () => {
            try {
                // 테스트 데이터
                // TODO - List type 받기
                // gpt api 연결 , searchbar 구현
                const searchResult = responseMusicList.map((keyword) => {
                    return searchMusic(keyword);
                });
                const response = await Promise.all(searchResult);
                setMusicList(response);
            } catch (fetcherr) {
                console.log('음악 리스트 불러오기 에러 : ', fetcherr);
            }
        };
        fetchMusicData();
    }, [responseMusicList]);

    /**
     * iframe에 비디오 아이디를 셋팅합니다.
     * @param videoId :string
     */
    const handlePlay = (youtubeId: string) => {
        // 현재 재생 중인 곡을 다시 클릭했다면 재생을 멈춥니다.
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
        setcurrentMusicItem(item);
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
            {musicList.map((music) => (
                <MusicCard
                    key={`${music.youtubeId}-${music.title}`}
                    youtubeId={music.youtubeId}
                    thumbnailUrl={music.thumbnailUrl}
                    title={music.title}
                    artist={music.artist}
                    isPlaying={nowPlaying === music.youtubeId}
                    onPlay={handlePlay}
                    onClick={() => handleClick(music)}
                />
            ))}
        </Container>
    );
};
