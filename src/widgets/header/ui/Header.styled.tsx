import styled from 'styled-components';

const breakpoints = {
    mobile: '550px',
    desktop: '1024px'
};

const media = {
    mobile: `@media screen and (min-width: ${breakpoints.mobile})`,
    desktop: `@media screen and (min-width: ${breakpoints.desktop})`
};

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
    padding: 0 10px 0 10px;
`;

export const Nav = styled.nav`
    display: none;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: 15px;

    ${media.mobile} {
        display: none;
    }
    ${media.desktop} {
        display: flex;
    }
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

export const MobileNav = styled.div<{ isOpen: boolean }>`
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: fixed;
    top: 0;
    right: ${(props) => (props.isOpen ? '0' : '-100%')};
    width: 50%;
    height: 100vh;
    background: white;
    padding: 2rem;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease;
    z-index: 8888;

    ${media.desktop} {
        display: none;
    }
`;

export const MobileNavItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 4rem;
`;

export const HamburgerButton = styled.button`
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0 10px 0 10px;

    ${media.desktop} {
        display: none;
        background: none;
        border: none;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    cursor: pointer;
`;
