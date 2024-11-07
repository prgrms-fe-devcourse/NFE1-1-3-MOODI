import React, { useState } from 'react';
import {
    CloseButton,
    Container,
    HamburgerButton,
    Logo,
    MobileNav,
    MobileNavItems,
    Nav,
    NavItem
} from './Header.styled';
import LogoImage from '@/shared/assets/logo.svg';
import { useAuthStore } from '@/features/login/hooks/useAuthStore';
import { Link } from 'react-router-dom';
import useLogout from '@/features/login/hooks/useLogout';

const Header = () => {
    const { isLoggedin } = useAuthStore();
    const { handleLogout } = useLogout();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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

            {/* 모바일 햄버거 버튼 */}
            <HamburgerButton onClick={toggleMenu}>메뉴</HamburgerButton>

            {/* 모바일 네비게이션 */}
            <MobileNav isOpen={isMenuOpen}>
                <CloseButton onClick={toggleMenu}>X</CloseButton>
                <MobileNavItems>
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
                </MobileNavItems>
            </MobileNav>
        </Container>
    );
};

export default Header;
