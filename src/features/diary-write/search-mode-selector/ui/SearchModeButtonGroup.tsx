import React from 'react';
import { Container, StyledButton } from './SearchModeButtonGroup.styled';
import { SEARCH_TYPE, SearchModeButtonGroupProps } from '../model/type';

export const SearchModeButtonGroup = ({
    selectedType,
    onChange
}: SearchModeButtonGroupProps) => {
    return (
        <Container>
            <StyledButton
                isActive={selectedType === SEARCH_TYPE.GPT}
                onClick={() => onChange(SEARCH_TYPE.GPT)}
                type="button"
                aria-label="AI에게 추천받기"
            >
                AI에게 추천받기
            </StyledButton>
            <StyledButton
                isActive={selectedType === SEARCH_TYPE.USER}
                onClick={() => onChange(SEARCH_TYPE.USER)}
                type="button"
                aria-label="직접 검색하기"
            >
                직접 검색하기
            </StyledButton>
        </Container>
    );
};
