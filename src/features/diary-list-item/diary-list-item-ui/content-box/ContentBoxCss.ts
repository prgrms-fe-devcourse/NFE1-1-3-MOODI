import styled from 'styled-components';

export const Wrapper = styled.div`
    padding-top: 0.5rem;
    flex: 1;
`;

export const Paragraph = styled.p`
    height: 30px;
    margin: 0.6rem 0;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
    line-height: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Top = styled.div`
    display: flex;
    gap: 1rem;
`;

export const Title = styled.p`
    font-size: 1rem;
    color: black;
    font-weight: 500;
`;

export const Name = styled.p`
    font-size: 14px;
    color: #414141;
`;

export const Bottom = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
    gap: 2rem;
`;

export const Time = styled.div`
    font-size: 14px;
    color: rgba(0, 0, 0, 0.4);
`;

export const Reaction = styled.div`
    width: 100%;
`;

export const Emotion = styled.div<{ imgPath: string | null }>`
    width: 40px;
    height: 60px;
    position: absolute;
    top: 10px;
    right: 1rem;
    background-image: url(${(props) => props.imgPath});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`;
