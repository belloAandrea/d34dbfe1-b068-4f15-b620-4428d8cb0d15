import Link from 'next/link';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: #333;
  color: white;
  padding: 10px;
  text-align: center;
`;

const Nav = styled.nav`
  margin: 10px 0;

  a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <h1>Launchpad</h1>
      <Nav>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/contact"><a>Contact</a></Link>
      </Nav>
    </HeaderContainer>
  );
}