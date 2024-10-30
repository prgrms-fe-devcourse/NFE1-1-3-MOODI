import styled from 'styled-components';

export const StyledButton = styled.button<{ isActive: boolean }>`
    width: 192px;
    height: 134px;
    border: 1px solid
        ${(props) =>
            props.isActive ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.1)'};
    border-radius: 10px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 14px;
    font-family: 'Pretendard', sans-serif;
    transition: all 0.2s ease;

    &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.1);
    }
`;
