import theme from '@/app/styles/theme';
import styled from 'styled-components';

export const StyledDiaryTextContainer = styled.div`
    width: 100%;
`;

export const StyledDiaryTitleContainer = styled.p`
    display: flex;
    justify-content: right;
    align-items: center;
    width: 100%;
    margin: 40px 0 0 0;
    padding: 0;

    @media (max-width: 550px) {
        flex-direction: column;
        gap: 10px;
    }
`;

export const StyledDiaryDate = styled.p`
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin: 0;
    padding: 0;
`;

export const Wrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const StyledDiaryTitle = styled.p`
    width: 100%;
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    margin: 0;
    padding: 0;
`;
export const StyledVisibilityButton = styled.div`
    position: absolute;

    @media (max-width: 550px) {
        position: static;
    }
`;

export const StyledDiaryAuthor = styled.p`
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    color: #3a3a3a;
    text-align: center;
    margin: 0;
    padding: 0;
`;
export const StyledDiaryUpdateDate = styled.p`
    font-size: 14px;
    font-weight: 400; //regular
    text-align: right;
    margin: 0;
    padding: 40px 0 0 0;
`;
export const StyledDiaryContent = styled.p`
    line-height: 180%;
    min-height: 400px;
    font-size: 16px;
    font-weight: 500;
    color: ${theme.colors.gray_dark};
    background-color: #ffffff;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.13);
    margin: 5px 0 0 0;
    white-space: pre-wrap; /* 줄바꿈을 유지 */
    word-wrap: break-word; /* 긴 단어도 줄바꿈 처리 */
`;
