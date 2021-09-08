import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

.icon{
    color: ${({ theme }) => theme.clr.neutral[900]};
    font-size:2.5em;
    cursor: pointer;

    &:hover{
        color: ${({ theme }) => theme.clr.primary[500]};

    }
}

:root{
    font-size: 110%;
    color: ${({ theme }) => theme.clr.neutral[900]}
}

@media ${({ theme }) => theme.breakpoints.laptop}{
    :root{
        font-size: 100%;
    }
}
@media ${({ theme }) => theme.breakpoints.mobile}{
    :root{
        font-size: 90%;
    }
}

`;

export default GlobalStyle;
