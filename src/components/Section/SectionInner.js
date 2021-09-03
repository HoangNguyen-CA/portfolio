import styled from 'styled-components';

const SectionInner = styled.div.attrs((props) => ({
  paddingy: props.paddingy || '5em',
}))`
  padding: ${(props) => props.paddingy + ' ' + props.theme.paddingx.desktop};

  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    padding: ${(props) => props.paddingy + ' ' + props.theme.paddingx.laptop};
  }

  @media ${({ theme }) => theme.breakpoints.tablet} {
    padding: ${(props) => props.paddingy + ' ' + props.theme.paddingx.tablet};
  }
  @media ${({ theme }) => theme.breakpoints.mobile} {
    padding: ${(props) => props.paddingy + ' ' + props.theme.paddingx.mobile};
  }
`;

export default SectionInner;
