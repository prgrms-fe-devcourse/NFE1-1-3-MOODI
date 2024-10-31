import React, { useMemo, useState } from 'react';
import { Container } from './SelectMusicContainer.styled';
import {
    MusicSearchInput,
    SearchModeButtonGroup,
    MusicCardList
} from '@/features/diary-write';
import {
    SearchType,
    SEARCH_TYPE
} from '@/features/diary-write/search-mode-selector/model/type';
import { useMusicSearch } from '@/entities/music';

// GPT 테스트용 리스트입니다
// 실제로는 API가 내려준 리스트가 들어옵니다.
const testdata = '뉴진스 supernatural';

// TODO - 로딩스피너 추가
export const SelectMusicContainer = () => {
    const [selectedType, setSelectedType] = useState<SearchType>(
        SEARCH_TYPE.GPT
    ); // 현재 선택된 리스트 타입
    const [searchKeyword, setSearchKeyword] = useState<string>(''); // 현재 검색 키워드
    const userMusic = useMusicSearch(
        selectedType === SEARCH_TYPE.USER ? searchKeyword : ''
    );
    const gptMusic = useMusicSearch(
        selectedType === SEARCH_TYPE.GPT ? testdata : ''
    );

    const userMusicList = useMemo(() => {
        return userMusic && userMusic.data ? [userMusic.data] : [];
    }, [userMusic?.data]);
    const gptMusicList = useMemo(() => {
        return gptMusic && gptMusic.data ? [gptMusic.data] : [];
    }, [gptMusic?.data]);

    /**
     * 리스트 타입 세팅
     * @param type
     */
    const handleTypeChange = (type: SearchType) => {
        setSelectedType(type);
    };

    /**
     * 검색
     * @param value
     */
    const handleSearchChange = (value: string) => {
        console.log('검색어 : ', value);
        setSearchKeyword(value);
    };

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
                        ? userMusicList
                        : gptMusicList
                }
            />
        </Container>
    );
};
