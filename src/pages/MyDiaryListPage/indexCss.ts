import styled from 'styled-components';

export const MyDiaryListWrapper = styled.div`
    position: relative;
    width: 90%;
    max-width: 960px;
    margin: 0 auto;
`;

export const PickSort = styled.div<{ sortState: string }>`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    gap: 1rem;

    & > div {
        font-size: 18px;
        font-weight: 500;
    }

    & > div:nth-of-type(1) {
        color: ${(props) =>
            props.sortState === 'lastest' ? 'black' : 'rgba(0, 0, 0, 0.5)'};
    }

    & > div:nth-of-type(2) {
        color: ${(props) =>
            props.sortState === '' ? 'black' : 'rgba(0, 0, 0, 0.5)'};
    }

    & > div:hover {
        cursor: pointer;
        color: black;
    }
`;
