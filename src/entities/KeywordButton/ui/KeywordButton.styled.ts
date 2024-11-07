import styled from 'styled-components';

const breakpoints = {
    mobile: '550px',
    desktop: '1024px'
};

const media = {
    mobile: `@media screen and (max-width: ${breakpoints.mobile})`,
    desktop: `@media screen and (max-width: ${breakpoints.desktop})`
};

export const StyledButton = styled.button<{ isActive: boolean }>`
    width: 150px;
    height: 50px;

    ${media.mobile} {
        width: 150px;
        height: 50px;
        gap: 5px;
        flex-direction: row;
    }

    width: 175px;
    height: 134px;
    gap: 10px;
    flex-direction: column;

    border: 1px solid
        ${(props) =>
            props.isActive ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.1)'};
    border-radius: 10px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-family: 'Pretendard', sans-serif;
    transition: all 0.2s ease;

    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.1);
    }
`;
