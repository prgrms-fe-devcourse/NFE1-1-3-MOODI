import React from 'react';
import { Container, Logo, Nav, NavItem } from './Header.styled';
import LogoImage from '@/shared/assets/logo.svg';

const Header = () => {
    return (
        <Container>
            <Logo>
                <img src={LogoImage} alt="logo" />
            </Logo>
            <Nav>
                <NavItem>홈</NavItem>
                <NavItem>타임라인</NavItem>
                <NavItem>내 일기</NavItem>
                <NavItem>마이페이지</NavItem>
            </Nav>
        </Container>
    );
};

export default Header;
