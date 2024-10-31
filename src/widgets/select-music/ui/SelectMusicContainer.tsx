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
import { SelectMusicContainerProps } from '../model/type';

// TODO - 로딩스피너 추가
export const SelectMusicContainer = ({
    gptRecommendMusicList
}: SelectMusicContainerProps) => {
    const [selectedType, setSelectedType] = useState<SearchType>(
        SEARCH_TYPE.GPT
    );
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const userMusic = useMusicSearch(
        selectedType === SEARCH_TYPE.USER ? searchKeyword : ''
    );
    const gptMusic = useMusicSearch(
        selectedType === SEARCH_TYPE.GPT ? gptRecommendMusicList[0] : ''
    );

    const userMusicList = useMemo(() => {
        return userMusic && userMusic.data ? [userMusic.data] : [];
    }, [userMusic]);
    const gptMusicList = useMemo(() => {
        return gptMusic && gptMusic.data ? [gptMusic.data] : [];
    }, [gptMusic]);

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
