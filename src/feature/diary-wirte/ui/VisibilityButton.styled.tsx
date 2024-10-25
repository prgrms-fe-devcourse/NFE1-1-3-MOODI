import styled from 'styled-components';

interface ButtonProps {
    isActive?: boolean;
}

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
    width: 70px;
    height: 40px;
    border-radius: 14px;
    transition: all 0.2s ease;
    background-color: ${(props) => (props.isActive ? '#FFF4F1' : '#ffffff')};
    border: 1px solid ${(props) => (props.isActive ? '#FF480E' : 'rgba(0, 0, 0, 0.1)')};
    &:hover {
        cursor: pointer;
        background-color: ${(props) => (props.isActive ? '#FFF4F1' : 'rgba(0, 0, 0, 0.1)')};
    }
`;

export const StyledImg = styled.img`
    height: 17px;
`;
