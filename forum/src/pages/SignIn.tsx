import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { getReqAsync, AddProfile } from "../components/GetRequestJson";
import Profile from "../types/Profile";
import {useCookies} from 'react-cookie';

type Props = {
    setAuth: Function;
}

const SignIn: React.FC<Props> = ({setAuth}) => {
    const [inUser, setInUser] = useState('');
    const [inPw, setInPW] = useState('');
    const [as, sasc] = useState('');
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['person']);
    

    const handleChangeU = (event: any) => {
        setInUser(event.target.value);
      }
    const handleChangeP = (event: any) => {
        setInPW(event.target.value);
      }
    const login = () => {
        const url: string = 'http://localhost:3000/api/v1/profiles/';
        getReqAsync(url, sasc).then((a: Profile[]) => {
            
            a.some( (tmp) => {
                if (tmp['user'] === inUser) {  
                    console.log(tmp['id']); 
                    setCookie('person', {"auth":true, "name": inUser, "id": tmp['id']});
                    setAuth(tmp);
                    return navigate("/home");
                } 
                else {
                    setInUser("User not found, Please register");
                }
            })

            }
        );

    }
    const register = () => {
        const url: string = 'http://localhost:3000/api/v1/profiles/';
        getReqAsync(url, sasc).then((a: Profile[]) => {
            
            const tmp: boolean = a.some( (tmp) => tmp['user'] === inUser
                            ? true : false)

            console.log(tmp);
            if (tmp) { 
                setInUser("User already exists")
            } else {
                AddProfile(url, inUser);
                setCookie('person', true);
                return navigate("/home");
            }
            }
        );

    }


    
    return (
        <div>
            <form id='sign' noValidate autoComplete="off">
                <TextField 
                    value={inUser} onChange={handleChangeU} id="username" label="username" />
                <br></br>
                <TextField  
                    value={inPw} onChange={handleChangeP}
                    id="pw" label="password"  />
                <br></br> <br></br>
                <Button variant="contained" onClick={login}>
                    Login
                </Button>
            </form>
                <br></br> <br></br>
            <form id='register' noValidate autoComplete="off">
                <TextField 
                    value={inUser} onChange={handleChangeU} id="username" label="username" />
                <br></br>
                <TextField  
                    value={inPw} onChange={handleChangeP}
                    id="pw" label="password"  />
                <br></br> <br></br>
                <Button variant="contained" onClick={register}>
                    register
                </Button>
            </form>
        </div>
    );
};

export default SignIn;