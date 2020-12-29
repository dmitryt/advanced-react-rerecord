
import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  background: red;
  transform: skew(-7deg);
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const StyledBar = styled.div`
  border-bottom: ${({ theme }) => `10px solid ${theme.black}`};
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  align-items: center;
`;

const StyledSubBar = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  border-bottom: ${({ theme }) => `1px solid ${theme.black}`};
`;

const Header = () => (
  <header>
    <StyledBar>
      <Logo>
        <Link href="/">Sick fits</Link>
      </Logo>
      <Nav />
    </StyledBar>
    <StyledSubBar>
      <p>Search</p>
    </StyledSubBar>
  </header>
);

export default Header;