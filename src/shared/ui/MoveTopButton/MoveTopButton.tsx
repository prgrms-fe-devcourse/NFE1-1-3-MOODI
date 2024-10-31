import React from 'react';
import {
    StyledButton,
    Container,
    StyledImg,
    StyledText
} from './MoveTopButton.styled';

const MoveTopButton = () => {
    /** 화면 최상단으로 이동하는 이벤트 */
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Container>
            <StyledButton onClick={handleClick}>
                <StyledImg src="/arrow_up.svg" />
                <StyledText>Top</StyledText>
            </StyledButton>
        </Container>
    );
};

export default MoveTopButton;
