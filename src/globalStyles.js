import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root{
    font-size: 110%;
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
