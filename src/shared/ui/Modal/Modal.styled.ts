import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const ModalStyled = styled.div`
    background: white;
    width: 370px;
    height: 200px;
    border-radius: 20px;
    padding: 8px;
    position: relative;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    animation: ${fadeIn} 2 ease forwards;

    h1 {
        margin-bottom: 30px;
    }

    svg {
        font-size: 30px;
        position: absolute;
        top: 18px;
        right: 20px;
        color: #838383;
        cursor: pointer;
    }
`;

export const ModalContent = styled.div`
    /* margin: 14px 0px 0px 40px; */
    position: relative;
    height: 100%;
`;
