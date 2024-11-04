import React from 'react';
import { Container, Logo, Nav, NavItem } from './Header.styled';
import LogoImage from '@/shared/assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <Logo>
                <img src={LogoImage} alt="logo" />
            </Logo>
            <Nav>
                <NavItem>홈</NavItem>
                <NavItem>타임라인</NavItem>
                <Link to="/my-diary">
                    <NavItem>내 일기</NavItem>
                </Link>
                <NavItem>마이페이지</NavItem>
            </Nav>
        </Container>
    );
};

export default Header;
