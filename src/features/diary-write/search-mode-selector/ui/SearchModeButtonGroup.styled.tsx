import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
`;

interface ButtonProps {
    isActive?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
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
