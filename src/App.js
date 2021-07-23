import Cover from './cover/Cover';
import Navbar from './navbar/Navbar';
import MainProjects from './projects/MainProjects';
import SmallProjects from './projects/SmallProjects';
import Contact from './contact/Contact';
import GlobalStyle from './globalStyles';

import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
      <Navbar />
      <Cover />
      <MainProjects />
      <SmallProjects />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
