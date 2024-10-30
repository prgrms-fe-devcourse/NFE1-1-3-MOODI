import styled from 'styled-components';

export const StyledReactionContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;

    border: 1px solid green;

    & > button {
        width: calc(20%-10px);
        margin: 5px;
    }
`;
