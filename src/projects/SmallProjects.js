import React from 'react';
import styled from 'styled-components';

import Header from '../components/SectionHeader';
import SmallProject from './SmallProject';
import fyloLandingImage from '../images/projects/fylo-landing-page.jpg';
import fyloStorageImage from '../images/projects/fylo-storage-component.jpg';
import calculatorImage from '../images/projects/calculator.jpg';
import shortlyImage from '../images/projects/shortly.jpg';

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
`;

const SmallProjects = () => {
  return (
    <Container>
      <Inner>
        <Header>Static Sites</Header>
        <ProjectsContainer>
          <SmallProject
            image={fyloLandingImage}
            header='Fylo Landing Page'
          ></SmallProject>
          <SmallProject
            image={shortlyImage}
            header='Url Shortener'
          ></SmallProject>
          <SmallProject
            image={calculatorImage}
            header='Javascript Calculator'
          ></SmallProject>
          <SmallProject
            image={fyloStorageImage}
            header='Fylo Storage Component'
          ></SmallProject>
        </ProjectsContainer>
      </Inner>
    </Container>
  );
};

export default SmallProjects;
