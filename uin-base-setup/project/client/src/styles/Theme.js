import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global';

const theme = {
  nav: {
    background: 'white',
    link: 'black',
  },
  breakpoints: {
    large: '1200px',
    medium: '992px',
    small: '767px',
  },
};

const Theme = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default Theme;
