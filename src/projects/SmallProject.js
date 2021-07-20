import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-size: 100% 100%;
  background-color: white;
  height: max-content;
  border: 2px solid black;
  width: 100%;

  &:hover {
    filter: brightness(50%);
  }
`;

const ImgContainer = styled.div`
  & > img {
    width: 100%;
    display: block;
  }
`;

const SmallProject = ({ image }) => {
  return (
    <Container>
      <ImgContainer>
        <img src={image} alt='Project'></img>
      </ImgContainer>
    </Container>
  );
};

export default SmallProject;
