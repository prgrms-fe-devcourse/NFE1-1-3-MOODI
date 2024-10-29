import theme from '../../../app/styles/theme';
import styled from 'styled-components';

interface IsClicked {
    clicked: boolean;
}

export const StyledEmotionButton = styled.button<IsClicked>`
    width: auto;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background-color: ${({ clicked }) =>
        clicked ? theme.colors.orange_selected : theme.colors.white_bg};
    border: 1px solid
        ${({ clicked }) =>
            clicked ? theme.colors.orange_primary : theme.colors.gray_normal};
    border-radius: 20px;
    padding: 10px 20px;
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
