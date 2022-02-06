import React, { useRef, useLayoutEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Navlinks from './Navlinks';

import SectionInner from '../components/Section/SectionInner';
import { Link } from 'react-scroll';
import { ReactComponent as LogoSVG } from '../images/hn_logo.svg';

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

const LogoContainer = styled(Link).attrs((props) => ({
  activeClass: '',
  to: 'cover',
  smooth: true,
  duration: 1000,
}))`
  color: ${({ theme }) => theme.clr.primary[900]};
  cursor: pointer;
`;

const Logo = styled(LogoSVG)`
  width: 40px;
  height: auto;
  fill: ${({ theme }) => theme.clr.primary[700]};
`;

const Navbar = () => {
  const navRef = useRef();
  const [active, setActive] = useState();

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
        <LogoContainer>
          <Logo></Logo>
        </LogoContainer>

        <Navlinks />
      </Inner>
    </Container>
  );
};

export default Navbar;
