import styled from 'styled-components';

const Button = styled.button.attrs({ type: 'button' })`
  font-size: 1rem;

  border: none;
  background-color: ${({ theme }) => theme.clr.primary[500]};
  box-shadow: 0 7px ${({ theme }) => theme.clr.primary[900]};
  color: ${({ theme }) => theme.clr.neutral[100]};
  padding: 1em 2em;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;

  transition: 0.05s ease-out;

  &:hover {
  }
  &:active {
    transform: translateY(2px);
    box-shadow: 0 5px ${({ theme }) => theme.clr.primary[900]};
  }
`;

export default Button;
