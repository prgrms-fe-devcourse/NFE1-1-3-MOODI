import { Button } from '../../stories/Button';
import styled from 'styled-components';

export const IdContainerStyled = styled.div`
    display: flex;
    justify-content: space-around;
    width: 500px;
    align-items: flex-end;
    @media (max-width: 760px) {
        max-width: 100%;
        input {
            width: 95%;
        }
        Button {
            width: 30%;
        }
    }
`;

export const SignStyled = styled.div`
    width: 500px;
    margin: auto;
    padding-bottom: 150px;
    max-width: 90%;
`;
