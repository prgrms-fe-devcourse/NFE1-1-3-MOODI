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

const responseMusicList = ['뉴진스 supernatural'];

function testFunction(res: MusicItem) {
    console.log(res);
}

export const SelectMusicContainer = () => {
    // 초기 리스트 상태는 GPT 추천입니다.
    const [selectedType, setSelectedType] = useState<SearchType>(
        SEARCH_TYPE.GPT
    );

    // 타입 셋팅
    const handleTypeChange = (type: SearchType) => {
        setSelectedType(type);
    };

    const [musicList, setMusicList] = useState(responseMusicList);

    useEffect(() => {}, []);

    const handleSearchChange = () => {};

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
                responseMusicList={responseMusicList}
                onChange={testFunction}
            />
        </Container>
    );
};
