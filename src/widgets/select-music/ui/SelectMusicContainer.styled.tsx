import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

export const SearchInputWrapper = styled.div<{ isVisible: boolean }>`
    width: 100%;
    max-height: ${(props) => (props.isVisible ? '100px' : '0')};
    opacity: ${(props) => (props.isVisible ? '1' : '0')};
    overflow: hidden;
    transition: all 0.2s ease-in-out;
`;

export const MusicListContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    position: relative;
`;
