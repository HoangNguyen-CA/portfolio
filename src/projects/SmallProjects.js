import React from 'react';
import styled from 'styled-components';

import Header from '../components/SectionHeader';
import { SmallProjectItems } from './projectInfo';

import SectionInner from '../components/SectionInner';

const Container = styled.div`
  background-color: ${({ theme }) => theme.bg.main};
`;

const Inner = styled(SectionInner)`
  color: ${({ theme }) => theme.clr.neutral[900]};

  & > * + * {
    margin-top: 5em;
  }
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  gap: 3em;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    gap: 2em;
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: 1fr;
  }
`;

const SmallProjects = () => {
  return (
    <Container>
      <Inner>
        <Header>Static Sites</Header>
        <ProjectsContainer>{SmallProjectItems}</ProjectsContainer>
      </Inner>
    </Container>
  );
};

export default SmallProjects;
