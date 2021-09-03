import React from 'react';
import styled from 'styled-components';

import Button from '../components/Button';

import illustration from '../images/cover.svg';
import SectionInner from '../components/Section/SectionInner';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { openNewPage } from '../utils';

import { scroller } from 'react-scroll';

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
  width: min-content;
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
  width: 100%;
  font-size: 1.5rem;
  margin-top: 1em;
  margin-bottom: 1em;
  @media ${({ theme }) => theme.breakpoints.laptop} {
    font-size: 1.3rem;
  }
  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 1.1rem;
  }
`;

const IconContainer = styled.div`
  margin-bottom: 1em;

  & > * + * {
    margin-left: 15px;
  }
`;

const ImgContainer = styled.div`
  height: max-content;
  & > img {
    width: 100%;
    height: auto;
    display: block;
  }
  flex-grow: 1 0;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    flex: 0 0;
    order: -1;
  }
`;

const Cover = () => {
  const openMail = () => {
    const subject = 'hoang.viet.nguyen';
    const mail = '@outlook.com';
    window.location.href = `mailto:${subject}${mail}`;
  };

  const handleProjects = () => {
    scroller.scrollTo('mainProjects', {
      duration: 1000,
      smooth: true,
    });
  };
  return (
    <Container name='cover'>
      <Inner>
        <LeftContainer>
          <SubHeader>Hi, I'm </SubHeader>
          <Header>Hoang Nguyen</Header>
          <Tag>
            I am a software developer based in Toronto, Canada. I love making
            beautiful & responsive websites/web applications. Have a look at my
            projects below to see what I can do.
          </Tag>
          <IconContainer>
            <FaGithub
              className='icon'
              onClick={openNewPage('https://github.com/HoangNguyen-CA')}
            />
            <FaLinkedin
              className='icon'
              onClick={openNewPage(
                'https://www.linkedin.com/in/hoang-nguyen-a36636196/'
              )}
            />
            <FaEnvelope onClick={openMail} className='icon' />
          </IconContainer>
          <Button onClick={handleProjects}>See My Work</Button>
        </LeftContainer>
        <ImgContainer>
          <img
            src={illustration}
            alt='web developer sitting on desk'
            width='557'
            height='300'
          />
        </ImgContainer>
      </Inner>
    </Container>
  );
};

export default Cover;
