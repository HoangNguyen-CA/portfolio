import React from 'react';
import styled from 'styled-components';

import { SmallProjectItems } from './projectInfo';

import SectionLayout from '../components/Section/SectionLayout';

const Layout = styled(SectionLayout)`
  background-color: ${({ theme }) => theme.bg.main};
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
    <Layout header='Static Sites'>
      <ProjectsContainer>{SmallProjectItems}</ProjectsContainer>
    </Layout>
  );
};

export default SmallProjects;
