import InputForm from '@/shared/ui/InputForm/InputForm';
import { Container, SearchFormWrapper } from './MusicSearchInput.styled';
import { useState } from 'react';
import { MusicSearchInputProps } from '../model/type';
import Button from '@/shared/ui/Button/Button';

export const MusicSearchInput = ({ onSearch }: MusicSearchInputProps) => {
    const [searchKeyword, setSearchKeyword] = useState('');

    const handleContentChange = (value: string) => {
        setSearchKeyword(value);
        onSearch(value);
        console.log(value);
    };

    const handleSearchSubmit = () => {};

    return (
        <Container>
            <SearchFormWrapper onSubmit={handleSearchSubmit}>
                <InputForm
                    label=""
                    width="100%"
                    height="52px"
                    value={searchKeyword}
                    onChange={handleContentChange}
                    placeholder="검색어를 입력해주세요."
                />
                <Button
                    isActive={searchKeyword.trim().length > 0}
                    height="52px"
                    width="120px"
                    fontSize="16px"
                    onClick={handleSearchSubmit}
                    hasBorder={false}
                >
                    검색
                </Button>
            </SearchFormWrapper>
        </Container>
    );
};
