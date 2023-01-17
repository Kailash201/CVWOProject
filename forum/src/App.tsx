import Home from './pages/Home';
import React, { createContext, useContext, useState } from 'react';
import './App.css';
import { BrowserRouter, Navigate, redirect, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { blue, green, orange } from '@material-ui/core/colors';
import Singlethread from './pages/SingleThreadView';
import Aa from './pages/DeletePage';
import Submitted from './pages/SubmittedPage';
import SignIn from './pages/SignIn';
import Protected from './components/Protected';
import { useCookies } from 'react-cookie';





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
                        <Route path="/home" element={<Protected auth={false || cookies.person === undefined ? false : cookies.person['auth'] }><Home></Home></Protected>} /> 
                             
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
