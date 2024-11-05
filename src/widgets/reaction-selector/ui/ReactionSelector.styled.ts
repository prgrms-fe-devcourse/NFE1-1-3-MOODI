import styled from 'styled-components';

export const StyledReactionSelector = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;

    & > button {
        width: calc(20%-10px);
        margin: 5px;
    }
`;
