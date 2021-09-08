import styled from 'styled-components';

const Button = styled.button.attrs((props) => ({
  type: props.$form ? 'submit' : 'button',
  width: props.$form ? '100%' : 'auto',
}))`
  font-size: 1rem;
  width: ${(props) => props.width};

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
    transform: translateY(-2px);
    box-shadow: 0 9px ${({ theme }) => theme.clr.primary[900]};
  }
  &:active {
    transform: translateY(7px);
    box-shadow: 0px 0px ${({ theme }) => theme.clr.primary[900]};
  }
`;

export default Button;
