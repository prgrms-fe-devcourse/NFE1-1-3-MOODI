import styled from 'styled-components';

export const ButtonStyled = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    @media (max-width: 760px) {
        gap: 10px;
        margin: auto;
    }
`;

export const LoginStyled = styled.div`
    max-width: 500px;
    margin: auto;
    @media (max-width: 760px) {
        width: 90%;
        gap: 10px;
    }
`;

export const LoginFormStlyed = styled.form`
    max-width: 100%;
    input {
        max-width: 100%;
    }
    @media (max-width: 760px) {
        max-width: 100%;
        input {
            max-width: 100%;
        }
    }
`;
