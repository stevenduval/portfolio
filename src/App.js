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
import { Projects } from "./Components/Projects/Projects";
import { Nav } from "./Components/Nav/Nav";

const theme = createTheme({
    palette: {
        mode: 'dark'
    },
    components: {
      MuiToolbar: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            height: "100%", 
            width: "fit-content", 
            zIndex: "1",
            position: "fixed",
            background: "#000000",
            padding: "0px !important",
            animation: "fadeInAnimation ease 3s",
            animationIterationCount: "1",
            animationFillMode: "forwards",
            boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
          },
        },
      },
    },
});

export const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<><Nav /> <Projects /> </>} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}