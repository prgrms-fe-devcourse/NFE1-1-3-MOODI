import styled from 'styled-components';

export const Container = styled.div`
    // position: absolute;
    // width: 100%;
    height: 250px;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.13);

    font-size: 16px;
    font-weight: bold;
    font-family: 'Pretendard', sans-serif;
`;

export const SubContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const EmotionContainer = styled.div`
    position: absolute;
    display: flex;
    height: 100px;
    width: 70px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 20px;
    left: 50%;
    transform: translateX(-50%);
    gap: 10px;

    font-weight: normal;
`;
