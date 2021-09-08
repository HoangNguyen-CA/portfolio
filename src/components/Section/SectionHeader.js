import styled from 'styled-components';

const Header = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.1em;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: 2.7rem;
  }
`;

export default Header;
