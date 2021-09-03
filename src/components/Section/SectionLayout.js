import React from 'react';
import styled from 'styled-components';

import SectionHeader from './SectionHeader';
import SectionInner from './SectionInner';

const Container = styled.div``;

function Layout({ header, className, children, gap, paddingy, ...props }) {
  return (
    <Container className={className} {...props}>
      <SectionInner gap={gap} paddingy={paddingy}>
        <SectionHeader>{header}</SectionHeader>
        {children}
      </SectionInner>
    </Container>
  );
}

export default Layout;
