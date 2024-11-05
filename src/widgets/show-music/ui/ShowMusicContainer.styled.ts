import styled from 'styled-components';
// import { Container as MusicCard } from '@/entities/music/ui/MusicCard.styled';

export const Container = styled.div`
    background-color: #ffffff;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.13);

    font-size: 16px;
    font-weight: bold;
    font-family: 'Pretendard', sans-serif;
`;

export const HiddenYoutubeContainer = styled.div`
    position: fixed;
    top: -9999px;
    left: -9999px;
    width: 1px;
    height: 1px;
    visibility: hidden;
`;

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-top: 10px;
    margin-bottom: 50px;
`;

// export const MusicCardContainer = styled(MusicCard)`
//     &:hover {
//         background-color: #ffffff;
//     }
// `;
