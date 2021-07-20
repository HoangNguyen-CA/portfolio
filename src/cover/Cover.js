import React from 'react';
import styled from 'styled-components';

import Button from '../components/Button';

import illustration from '../images/cover.svg';

const Container = styled.div`
  background-color: ${({ theme }) => theme.bg.header};
`;

const Inner = styled.div`
  min-height: calc(100vh - ${({ theme }) => theme.navbarHeight});
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.paddingx.desktop};

  & > * + * {
    margin-left: 5em;
  }
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

const LeftContainer = styled.div`
  width: max-content;
  color: ${({ theme }) => theme.clr.neutral[900]};
`;

const Header = styled.h1`
  display: inline-block;
  font-size: 4.5rem;
  font-weight: 300;
  letter-spacing: 0.15em;
  margin-bottom: 0em;

  min-width: max-content;

  position: relative;
  z-index: 1;

  &::after {
    content: '';
    width: 100%;
    height: 30%;
    position: absolute;
    background-color: ${({ theme }) => theme.clr.primary[200]};
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`;

const SubHeader = styled.h2`
  font-size: 2.5rem;
`;

const Tag = styled.p`
  font-size: 1.5rem;
  margin-top: 1em;
  margin-bottom: 2em;
`;

const ImgContainer = styled.div`
  width: auto;
  & > img {
    width: 100%;
  }
  flex-grow: 1;
`;

const Cover = () => {
  return (
    <Container>
      <Inner>
        <LeftContainer>
          <SubHeader>Hi, I'm </SubHeader>
          <Header>Hoang Nguyen</Header>
          <Tag>Software developer based in Toronto, Canada.</Tag>
          <Button>See My Work</Button>
        </LeftContainer>
        <ImgContainer>
          <img src={illustration} alt='web developer sitting on desk' />
        </ImgContainer>
      </Inner>
    </Container>
  );
};

export default Cover;
