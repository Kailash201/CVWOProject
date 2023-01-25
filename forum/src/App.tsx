import Home from './pages/Home';
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { blue, orange } from '@material-ui/core/colors';
import SignIn from './pages/SignIn';
import Protected from './components/Protected';
import { useCookies } from 'react-cookie';
import Search from './pages/Search';
import Profile from './pages/Profile';





const theme = createTheme({
    palette: {
        primary: blue,
        secondary: orange,
    },
});

const App: React.FC = () => {
    const [auth, setAuth] = useState(false);
    const [cookies, setCookie] = useCookies(['person']);
    console.log(cookies.person);
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<SignIn setAuth={setAuth}/>} />
                        <Route path="/home" element={<Protected 
                                                        auth={false || cookies.person === undefined 
                                                        ? false 
                                                        : cookies.person['auth'] }>
                                                            <Home></Home>
                                                    </Protected>} /> 
                        <Route path="/Search" element={<Search></Search>} />
                        <Route path="/Profile" element={<Profile></Profile>} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
};

export default App;
