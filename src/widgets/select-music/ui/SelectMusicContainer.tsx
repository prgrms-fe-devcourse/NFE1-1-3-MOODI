import React, { useEffect, useState } from 'react';
import { Container } from './SelectMusicContainer.styled';
import {
    MusicSearchInput,
    SearchModeButtonGroup
} from '@/features/diary-write';
import { MusicCardList } from '@/features/diary-write/musicList/ui/MusicCardList';
import { MusicItem } from '@/entities/music/model/type';
import {
    SearchType,
    SEARCH_TYPE
} from '@/features/diary-write/search-mode-selector/model/type';
import { searchMusic } from '@/entities/music';

// 테스트
const testList = ['뉴진스 supernatural'];

export const SelectMusicContainer = () => {
    // 초기 리스트 상태는 GPT 추천입니다.
    const [selectedType, setSelectedType] = useState<SearchType>(
        SEARCH_TYPE.GPT
    );
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    // const [selectedMusicItem, setSelectedMusicItem] =
    //     useState<MusicItem | null>(null);
    const [responseUserMusicList, setresponseUserMusicList] = useState<
        MusicItem[]
    >([]);
    const [responseGptMusicList, setresponseGptMusicList] = useState<
        MusicItem[]
    >([]);

    // 타입 셋팅
    const handleTypeChange = (type: SearchType) => {
        setSelectedType(type);
    };

    // // 현재 유저가 선택한 음악 정보 (제출)
    // const handleMusicChange = (item: MusicItem) => {
    //     setSelectedMusicItem(item);
    // };

    // 검색어 처리
    const handleSearchChange = (value: string) => {
        console.log('검색어 : ', value);
        setSearchKeyword(value);
    };

    // 테스트
    // useEffect(() => {
    //     console.log(selectedMusicItem);
    // }, [selectedMusicItem]);

    // musicList를 구성하기 위한 musicItem 리스트를 불러옵니다.
    useEffect(() => {
        const fetchMusicData = async () => {
            try {
                let searchResult: Promise<MusicItem>[];
                if (selectedType === SEARCH_TYPE.USER) {
                    searchResult = [searchMusic(searchKeyword)];
                    setresponseUserMusicList(await Promise.all(searchResult));
                } else if (selectedType === SEARCH_TYPE.GPT) {
                    searchResult = testList.map((keyword) => {
                        return searchMusic(keyword);
                    });
                    setresponseGptMusicList(await Promise.all(searchResult));
                } else {
                    console.log('리스트 불러오기 에러');
                }
            } catch (fetcherr) {
                console.log('음악 리스트 불러오기 에러 : ', fetcherr);
            }
        };
        fetchMusicData();
    }, [searchKeyword]);

    return (
        <Container>
            <SearchModeButtonGroup
                selectedType={selectedType}
                onChange={handleTypeChange}
            />
            {selectedType === SEARCH_TYPE.USER && (
                <MusicSearchInput onSearch={handleSearchChange} />
            )}
            <MusicCardList
                type={selectedType}
                responseMusicList={
                    selectedType === SEARCH_TYPE.USER
                        ? responseUserMusicList
                        : responseGptMusicList
                }
                // onChange={handleMusicChange}
            />
        </Container>
    );
};
