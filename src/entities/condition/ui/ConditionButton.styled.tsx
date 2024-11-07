import styled from 'styled-components';

interface ButtonProps {
    isActive?: boolean;
}

const breakpoints = {
    mobile: '550px',
    desktop: '1024px'
};

const media = {
    mobile: `@media screen and (min-width: ${breakpoints.mobile})`,
    desktop: `@media screen and (min-width: ${breakpoints.desktop})`
};

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const StyledButton = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 50px;

    ${media.mobile} {
        width: 90px;
        height: 50px;
    }

    ${media.desktop} {
        width: 180px;
        height: 60px;
    }

    border-radius: 5px;
    transition: all 0.2s ease;
    background-color: ${(props) => (props.isActive ? '#FFF4F1' : '#ffffff')};
    border: 1px solid
        ${(props) => (props.isActive ? '#FF480E' : 'rgba(0, 0, 0, 0.1)')};
    &:hover {
        cursor: pointer;
        background-color: ${(props) =>
            props.isActive ? '#FFF4F1' : 'rgba(0, 0, 0, 0.1)'};
    }
`;
