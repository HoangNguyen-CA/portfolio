import React from 'react';
import styled from 'styled-components';

import Header from '../components/SectionHeader';

import { MainProjectItems } from './ProjectInfo';

import SectionInner from '../components/SectionInner';

const Container = styled.div`
  background-color: ${({ theme }) => theme.bg.main};
`;

const Inner = styled(SectionInner)`
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
        {MainProjectItems}
      </Inner>
    </Container>
  );
};

export default MainProjects;
