import React from 'react';
import styled from 'styled-components';

import Button from '../components/Button';

import illustration from '../images/cover.svg';
import SectionInner from '../components/SectionInner';

const Container = styled.div`
  background-color: ${({ theme }) => theme.bg.header};
`;

const Inner = styled(SectionInner)`
  min-height: 100vh;
  display: flex;
  align-items: center;

  & > * + * {
    margin: 0 0 0 5em;
  }
  @media ${({ theme }) => theme.breakpoints.laptop} {
    & > * + * {
      margin: 0 0 0 5em;
    }
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    text-align: center;
    flex-direction: column;
    justify-content: center;

    & > * + * {
      margin: 0 0 3em 0; /* margin bottom due to order being reversed */
    }
  }
`;

const LeftContainer = styled.div`
  width: min(max-content, 100%);
  color: ${({ theme }) => theme.clr.neutral[900]};
`;

const Header = styled.h1`
  display: inline-block;
  font-size: 4rem;
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

  @media ${({ theme }) => theme.breakpoints.laptop} {
    font-size: 3rem;
  }
  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 3rem;
  }
  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 3rem;
  }
  @media ${({ theme }) => theme.breakpoints.mobile} {
    font-size: 2.2rem;
  }
`;

const SubHeader = styled.h2`
  font-size: 2.5rem;
  @media ${({ theme }) => theme.breakpoints.laptop} {
    font-size: 1.5rem;
  }
`;

const Tag = styled.p`
  font-size: 1.5rem;
  margin-top: 1em;
  margin-bottom: 2em;
  @media ${({ theme }) => theme.breakpoints.laptop} {
    font-size: 1.3rem;
  }
  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 1.1rem;
  }
`;

const ImgContainer = styled.div`
  height: max-content;
  & > img {
    width: 100%;
    display: block;
  }
  flex-grow: 1 0;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    flex: 0 0;
    order: -1;
  }
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
