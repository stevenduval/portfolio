import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/pt-sans-narrow/400.css';
import '@fontsource/pt-sans-narrow/700.css';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Home } from './Components/Home/Home';
import { Portfolio } from "./Components/Portfolio/Portfolio";
import { Nav } from "./Components/Nav/Nav";

const theme = createTheme({
    palette: {
        mode: 'dark'
    }
});

export const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<><Nav /> <Portfolio /> </>} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}