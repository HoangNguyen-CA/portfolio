import React from 'react';
import styled from 'styled-components';
import Navlinks from './Navlinks';

const Container = styled.div``;

const Inner = styled.div`
  display: flex;
  margin: 0 auto;

  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.navbarHeight};
  max-width: ${({ theme }) => theme.maxWidth};
  padding: 0 ${({ theme }) => theme.paddingx.desktop};
`;

const Logo = styled.p`
  color: ${({ theme }) => theme.clr.primary[900]};
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Inner>
        <Logo>HN</Logo>
        <Navlinks />
      </Inner>
    </Container>
  );
};

export default Navbar;
