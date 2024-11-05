import React from 'react';
import { Container, Logo, Nav, NavItem, LoginButton } from './Header.styled';
import LogoImage from '@/shared/assets/logo.svg';
import { useAuthStore } from '@/features/login/hooks/useAuthStore';
import { Link, useNavigate } from 'react-router-dom';
import useLogout from '@/features/login/hooks/useLogout';

const Header = () => {
    const navigate = useNavigate();
    const { userName, isLoggedin } = useAuthStore();
    const { handleLogout } = useLogout();

    const handleLogoutClick = (e: React.MouseEvent) => {
        e.preventDefault();
        handleLogout();
    };

    return (
        <Container>
            <Logo>
                <Link to="/">
                    <img src={LogoImage} alt="logo" />
                </Link>
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
                {isLoggedin && (
                    <Link to="/my-page">
                        <NavItem>마이페이지</NavItem>
                    </Link>
                )}
                {!isLoggedin ? (
                    <Link to="/login">
                        <NavItem>로그인</NavItem>
                    </Link>
                ) : (
                    <NavItem onClick={handleLogoutClick}>로그아웃</NavItem>
                )}
            </Nav>
        </Container>
    );
};

export default Header;
