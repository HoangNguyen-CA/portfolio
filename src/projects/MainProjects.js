import React from 'react';
import styled from 'styled-components';

import { MainProjectItems } from './projectInfo';

import SectionLayout from '../components/Section/SectionLayout';

const Layout = styled(SectionLayout)`
  background-color: ${({ theme }) => theme.bg.main};
  color: ${({ theme }) => theme.clr.neutral[900]};
`;

const MainProjects = () => {
  return (
    <Layout header='Full Stack Projects' name='mainProjects'>
      {MainProjectItems}
    </Layout>
  );
};

export default MainProjects;
