import React, { useRef, useLayoutEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Navlinks from './Navlinks';

import SectionInner from '../components/Section/SectionInner';
import { Link } from 'react-scroll';

const activeStyles = css`
  background-color: ${({ theme }) => theme.clr.primary[100]};
`;

const Container = styled.div`
  background-color: ${({ theme }) => theme.clr.neutral[200]};
  position: sticky;
  width: 100%;
  z-index: 100;
  top: 0;
  height: ${({ theme }) => theme.navbarHeight};
  ${(props) => props.$active && activeStyles};

  transition: 0.4s ease-out;
`;

const Inner = styled(SectionInner)`
  display: flex;

  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
`;

const Logo = styled(Link).attrs((props) => ({
  activeClass: '',
  to: 'cover',
  smooth: true,
  duration: 1000,
}))`
  color: ${({ theme }) => theme.clr.primary[900]};
  font-size: 1.7rem;
  font-weight: 700;
  cursor: pointer;
`;

const Navbar = () => {
  const navRef = useRef();
  const [active, setActive] = useState();

  console.log(active);
  const onScroll = () => {
    if (window.scrollY > navRef.current.offsetHeight + 50) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <Container ref={navRef} $active={active}>
      <Inner paddingy='0' gap='0'>
        <Logo>HN</Logo>
        <Navlinks />
      </Inner>
    </Container>
  );
};

export default Navbar;
