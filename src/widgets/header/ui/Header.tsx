import { Container, Logo, Nav, NavItem } from './Header.styled'

const Header = () => {
  return (
    <Container>
      <Logo>
        <img src="/logo.svg" alt="logo" />
      </Logo>
      <Nav>
        <NavItem>홈</NavItem>
        <NavItem>타임라인</NavItem>
        <NavItem>내 일기</NavItem>
        <NavItem>마이페이지</NavItem>
      </Nav>
    </Container>
  )
}

export default Header
