import styled from 'styled-components';

export const ModalStyled = styled.div`
    background: white;
    width: 370px;
    height: 200px;
    border-radius: 20px;
    box-shadow: inset;
    padding: 8px;
    position: relative;
    h1 {
        margin-bottom: 30px;
    }
    svg {
        font-size: 30px;
        position: absolute;
        top: 18px;
        right: 20px;
        color: #838383;
    }
`;

export const ModalContent = styled.div`
    margin: 14px 0px 0px 40px;
`;
