import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 110px;
    font-weight: 800;
    color: #000000;
    text-align: start;
    line-height: 115px;
    letter-spacing: -2px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    white-space: pre-wrap;
    font-family: 'Pretendard', sans-serif;
    animation: revealTitle 1s ease-out forwards;
    transform: translateY(100%); /* 초기 상태 설정 */

    @keyframes revealTitle {
        0% {
            transform: translateY(10%);
            opacity: 0; /* 선택적으로 페이드 인 효과 추가 */
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;
