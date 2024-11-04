import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    margin: 0 10% 0 10%;
    max-width: 1500px;
    margin: auto;
`;

export const Logo = styled.div`
    display: flex;
    cursor: pointer;
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: 15px;
`;

export const NavItem = styled.div`
    display: flex;
    border-radius: 10%;
    padding: 1rem;
    cursor: pointer;
    &:hover {
        background-color: #f2f2f2;
    }
`;

export const LoginButton = styled.div`
    padding: 6px 15px;
    font-size: 15px;
    border-radius: 30px;
    color: #aeaeae;
    border: 1px solid #aeaeae;
    &:hover {
        background-color: #f2f2f2;
    }
`;
