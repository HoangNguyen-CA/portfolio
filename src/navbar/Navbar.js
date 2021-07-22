import React from 'react';
import styled from 'styled-components';
import Navlinks from './Navlinks';

import SectionInner from '../components/SectionInner';

const Container = styled.div`
  background-color: ${({ theme }) => theme.clr.neutral[200]};
  position: fixed;
  width: 100%;
  z-index: 100;
  top: 0;
`;

const Inner = styled(SectionInner)`
  display: flex;

  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.navbarHeight};
  max-width: ${({ theme }) => theme.maxWidth};
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
      <Inner paddingy='0'>
        <Logo>HN</Logo>
        <Navlinks />
      </Inner>
    </Container>
  );
};

export default Navbar;
