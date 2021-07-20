import React from 'react';
import styled from 'styled-components';

import Link from '../components/Link';

const Container = styled.div`
  & > * + * {
    margin-left: 2em;
  }
`;

const Navlinks = () => {
  return (
    <Container>
      <Link>Projects</Link>
      <Link>Contact</Link>
    </Container>
  );
};

export default Navlinks;
