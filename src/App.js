import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Nav } from './Components/Nav/Nav';
import { Home } from './Components/Home/Home';
import { Projects } from './Components/Projects/Projects';
import { Resume } from './Components/Resume/Resume';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/pt-sans-narrow/400.css';
import '@fontsource/pt-sans-narrow/700.css';
import './App.css'

import CssBaseline from '@mui/material/CssBaseline';

import { createTheme, ThemeProvider } from '@mui/material/styles';


export const App = () => {

    const theme = createTheme({
        palette: {
            mode: 'dark'
        }
    });

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/projects' element={<> <Nav /> <Projects /> </>} />
                    <Route path='/resume' element={<> <Nav /> <Resume /> </>} />
                </Routes>
            </ThemeProvider>
        </Router>
    );

}