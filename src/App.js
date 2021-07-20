import Cover from './cover/Cover';
import Navbar from './navbar/Navbar';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Cover />
    </ThemeProvider>
  );
}

export default App;
