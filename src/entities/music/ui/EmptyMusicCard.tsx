import React from 'react';
import { Container, TextWrap } from './EmptyMusicCard.styled';

export const EmptyMusicCard = () => {
    return (
        <Container>
            <TextWrap>제목으로 노래를 검색해주세요!</TextWrap>
        </Container>
    );
};
