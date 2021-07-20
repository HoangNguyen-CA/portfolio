import React from 'react';
import styled from 'styled-components';

import Header from '../components/SectionHeader';
import MainProject from './MainProject';

import Image1 from '../images/cover.svg';

const Container = styled.div`
  background-color: ${({ theme }) => theme.bg.main};
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 5em ${({ theme }) => theme.paddingx.desktop};
  color: ${({ theme }) => theme.clr.neutral[900]};

  & > * + * {
    margin-top: 4em;
  }
`;

const MainProjects = ({ reversed }) => {
  return (
    <Container>
      <Inner>
        <Header>Full-Stack Projects</Header>
        <MainProject image={Image1}> </MainProject>
        <MainProject image={Image1} reversed></MainProject>
      </Inner>
    </Container>
  );
};

export default MainProjects;
