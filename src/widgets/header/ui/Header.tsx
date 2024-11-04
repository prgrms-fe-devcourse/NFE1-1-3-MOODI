import React from 'react';
import { Container, Logo, Nav, NavItem, LoginButton } from './Header.styled';
import LogoImage from '@/shared/assets/logo.svg';
import { useAuthStore } from '@/features/login/hooks/useAuthStore';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const { email, userName, isLoggedin, setUserInfo } = useAuthStore();
    return (
        <Container>
            <Logo>
                <img src={LogoImage} alt="logo" />
            </Logo>
            <Nav>
                <Link to="/">
                    <NavItem>홈</NavItem>
                </Link>
                {isLoggedin && (
                    <Link to="/diary">
                        <NavItem>내 일기</NavItem>
                    </Link>
                )}
                {isLoggedin && <NavItem>마이페이지</NavItem>}
                {!isLoggedin && (
                    <Link to="/login">
                        <NavItem>로그인</NavItem>
                    </Link>
                )}
            </Nav>
        </Container>
    );
};

export default Header;
