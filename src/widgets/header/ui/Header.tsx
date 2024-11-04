import React from 'react';
import { Container, Logo, Nav, NavItem, LoginButton } from './Header.styled';
import LogoImage from '@/shared/assets/logo.svg';

import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <Logo>
                <img src={LogoImage} alt="logo" />
            </Logo>
            <Nav>
                <Link to="/">홈</Link>
                <NavItem>타임라인</NavItem>
                <Link to="/my-diary">
                    <NavItem>내 일기</NavItem>
                </Link>
                <NavItem>마이페이지</NavItem>
                <LoginButton>
                    <Link to="/login">로그인</Link>
                </LoginButton>
            </Nav>
        </Container>
    );
};

export default Header;
