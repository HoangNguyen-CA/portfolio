import styled from 'styled-components';

const Link = styled.button`
  font-size: 1rem;
  font-weight: 600;

  border: none;
  cursor: pointer;
  background-color: transparent;
  color: ${({ theme }) => theme.clr.neutral[800]};
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.clr.neutral[900]};
  }

  &::after {
    content: '';
    width: 0%;
    left: 50%;
    bottom: -7px;

    transform: translateX(-50%);

    position: absolute;
    height: 3px;
    background-color: ${({ theme }) => theme.clr.primary[500]};
    transition: width 0.2s ease-out, color 0.2s ease-out;
  }

  &:hover::after {
    width: 110%;
  }
`;

export default Link;
