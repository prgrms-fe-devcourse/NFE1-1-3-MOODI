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

// GPT 테스트용 리스트입니다
// 실제로는 API가 내려준 리스트가 들어옵니다.
const testList = ['뉴진스 supernatural'];

// TODO - 로딩스피너 추가
export const SelectMusicContainer = () => {
    const [selectedType, setSelectedType] = useState<SearchType>(
        SEARCH_TYPE.GPT
    );
    const [searchKeyword, setSearchKeyword] = useState<string>('');
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

    // 검색어 처리
    const handleSearchChange = (value: string) => {
        console.log('검색어 : ', value);
        setSearchKeyword(value);
    };

    // 검색
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
    }, [selectedType, searchKeyword]);

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
            />
        </Container>
    );
};
