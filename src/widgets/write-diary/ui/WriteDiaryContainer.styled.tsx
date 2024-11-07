import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;

    // background-color: #eeeeee;
`;

export const SelectDateContainer = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    width: 100%;
`;

export const DateContainer = styled.div`
    position: absolute;
    left: 0;

    font-size: 24px;
    font-weight: bold;
    font-family: 'Pretendard', sans-serif;
`;

export const DatePickeContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;
`;

export const TitleContainer = styled.div``;

export const ContentContainer = styled.div``;

export const VisibilityControlsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
