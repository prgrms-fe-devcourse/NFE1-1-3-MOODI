import styled from 'styled-components';

export const StyledButton = styled.button`
    width: 120px;
    height: 50px;
    background-color: #ffffff;
    border-radius: 100px;
    border: 1px solid #00000066;
    transition:
        background-color 0.2s,
        border-color 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #fff4f166;
        border-color: #ff480e;
    }
`;

export const StyledImg = styled.img`
    height: 20px;
    width: 20px;
    cursor: pointer;
`;
