import theme from '@/app/styles/theme';
import styled from 'styled-components';

export const StyledReactionContainer = styled.div`
    width: 40%;
`;

export const StyledReactionBtnContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    & > button {
        width: calc(20% - 10px); /* 수정: '20%-10px'을 '20% - 10px'으로 */
        margin: 5px;
    }
`;

export const StyledEmotionContainer = styled.div`
    width: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 998;
    background: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 10px;
    border-radius: 8px;
`;

export const StyledCloseButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 999;

    &:hover {
        color: ${theme.colors.orange_primary};
    }
`;
