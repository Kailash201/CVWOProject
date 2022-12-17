import Home from './pages/Home';
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { blue, green, orange } from '@material-ui/core/colors';
import Singlethread from './pages/SingleThreadView';
import Aa from './pages/DeletePage';
import Submitted from './pages/SubmittedPage';



const theme = createTheme({
    palette: {
        primary: blue,
        secondary: orange,
    },
});

const App: React.FC = () => {
 
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/thread" element={<Singlethread />} />
                        <Route path="/delete" element={<Aa></Aa>} />
                        <Route path="/submit" element={<Submitted></Submitted>} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
};

export default App;
