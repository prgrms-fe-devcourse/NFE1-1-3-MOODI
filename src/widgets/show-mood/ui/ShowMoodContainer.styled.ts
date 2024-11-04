import styled from 'styled-components';

export const Container = styled.div`
    // width: 100%;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.13);

    font-size: 16px;
    font-weight: bold;
    font-family: 'Pretendard', sans-serif;
`;

export const MoodContainer = styled.div`
    height: 150px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;

    font-weight: normal;
`;

export const DotContainer = styled.div`
    display: flex;
    gap: 10px;
`;
