import React from 'react';
import {
    StyledButton,
    Container,
    StyledImg,
    StyledText
} from './MoveTopButton.styled';
import arrow from '@/shared/assets/arrow_up.svg';

const MoveTopButton = () => {
    /** 화면 최상단으로 이동하는 이벤트 */
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Container>
            <StyledButton onClick={handleClick}>
                <StyledImg src={arrow} />
                <StyledText>Top</StyledText>
            </StyledButton>
        </Container>
    );
};

export default MoveTopButton;
