import React from "react";
import styled, { css } from "styled-components";

import { openNewPage } from "../utils";

import Button from "../components/Button";

const Container = styled.div`
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: column;
  }
`;

const normalStyles = css`
  margin: 0 5em 0 0;
  order: -1;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    & > * + * {
      margin: 0 2em 0 0;
    }
  }
`;

const reversedStyles = css`
  margin: 0 0 0 5em;
  order: 1;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    & > * + * {
      margin: 0 0 0 2em;
    }
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  & > img {
    width: 100%;
    height: auto;
    display: block;
  }
  max-width: 1980px;
  box-shadow: 0 0 15px 2px ${({ theme }) => theme.clr.neutral[900]}33;

  ${(props) => (props.reversed ? reversedStyles : normalStyles)};

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin: 3em 0 0 0;
    order: 1;
  }
`;

const Inner = styled.div`
  width: 100%;
`;

const Header = styled.h3`
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 0.5em;
  letter-spacing: 0.1em;
`;

const Desc = styled.p`
  font-size: 1rem;
  margin-bottom: 2em;
  letter-spacing: 1px;
  line-height: 1.8em;
`;

const ButtonContainer = styled.div`
  display: flex;

  & > * + * {
    margin-left: 1em;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin-bottom: 1em;
`;

const Tag = styled.p`
  padding: 0.5em 1em;
  border: 1px solid ${({ theme }) => theme.clr.neutral[900]};
`;

const MainProject = ({
  image,
  reversed,
  header = "Project",
  desc = "This is my project.",
  tags = [],
  codeLink,
  demoLink,
  heroku,
}) => {
  const imageNode = (
    <ImgContainer reversed={reversed}>
      <img src={image} alt="project" width="1920" height="1080" />
    </ImgContainer>
  );

  const tagsNode = tags.map((str) => <Tag key={str}>{str}</Tag>);

  const contentNode = (
    <Inner>
      <Header>{header}</Header>
      <TagContainer>{tagsNode}</TagContainer>
      <Desc>{desc}</Desc>
      <ButtonContainer>
        <Button onClick={openNewPage(codeLink)}>Code</Button>
        {demoLink && (
          <Button onClick={openNewPage(demoLink)}>
            Demo {heroku ? "(Heroku)" : ""}
          </Button>
        )}
      </ButtonContainer>
    </Inner>
  );

  return (
    <Container>
      {contentNode}
      {imageNode}
    </Container>
  );
};

export default MainProject;
