import theme from '../../../app/styles/theme';
import styled from 'styled-components';

interface reactionBtnProps {
    isHorizontal: boolean;
    clicked: boolean;
}
export const StyledReactionButton = styled.button<reactionBtnProps>`
    display: flex;
    flex-direction: ${({ isHorizontal }) => (isHorizontal ? 'row' : 'column')};
    align-items: ${({ isHorizontal }) => (isHorizontal ? 'center' : 'center')};
    padding: ${({ isHorizontal }) => (isHorizontal ? '0 20px' : '5px')};
    width: ${({ isHorizontal }) => (isHorizontal ? '70px' : '80px')};
    height: ${({ isHorizontal }) => (isHorizontal ? '30px' : '100px')};

    gap: 5px;
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
