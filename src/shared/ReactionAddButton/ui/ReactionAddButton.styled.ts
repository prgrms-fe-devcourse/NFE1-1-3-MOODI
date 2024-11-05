import theme from '@/app/styles/theme';
import styled from 'styled-components';

interface reactionAddBtnProps {
    isHorizontal: boolean;
    clicked: boolean;
}

export const styledReactionAddBtn = styled.button<reactionAddBtnProps>`
    background-color: ${({ clicked }) =>
        clicked ? theme.colors.orange_selected : theme.colors.white_bg};
    border: 1px solid
        ${({ clicked }) =>
            clicked ? theme.colors.orange_primary : theme.colors.gray_normal};
    border-radius: ${({ isHorizontal }) => (isHorizontal ? '30px' : '20px')};
    cursor: pointer;
    transition:
        background-color 0.2s,
        border-color 0.2s;

    &:hover {
        background-color: ${({ clicked }) =>
            clicked
                ? theme.colors.orange_selected
                : theme.colors.orange_selected};
        border-color: ${({ clicked }) =>
            clicked
                ? theme.colors.orange_primary
                : theme.colors.orange_primary};
    }
`;
