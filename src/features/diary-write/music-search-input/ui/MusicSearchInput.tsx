import React from 'react';
import InputForm from '@/shared/ui/InputForm/InputForm';
import { Container, SearchFormWrapper } from './MusicSearchInput.styled';
import { useState } from 'react';
import { MusicSearchInputProps } from '../model/type';
import Button from '@/shared/ui/Button/Button';

export const MusicSearchInput = ({ onSearch }: MusicSearchInputProps) => {
    const [searchKeyword, setSearchKeyword] = useState('');

    // TODO - 디바운싱
    const handleContentChange = (value: string) => {
        setSearchKeyword(value);
    };

    const handleSearchClick = () => {
        onSearch(searchKeyword);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && searchKeyword.trim()) {
            onSearch(searchKeyword);
        }
    };

    return (
        <Container>
            <SearchFormWrapper>
                <InputForm
                    label=""
                    width="100%"
                    height="52px"
                    value={searchKeyword}
                    onChange={handleContentChange}
                    placeholder="제목을 입력해주세요."
                    onKeyDown={handleKeyDown}
                />
                <Button
                    isActive={searchKeyword.trim().length > 0}
                    height="52px"
                    width="120px"
                    fontSize="16px"
                    onClick={handleSearchClick}
                    hasBorder={false}
                >
                    검색
                </Button>
            </SearchFormWrapper>
        </Container>
    );
};
