import { Button, makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { getReqAsync, AddProfile } from "../components/GetRequestJson";
import Profile from "../types/Profile";
import {useCookies} from 'react-cookie';

type Props = {
    setAuth: Function;
}
const useStyles = makeStyles({
    tf: {
        width: '100%',
        color: "#B67233",
        fontSize: "110px"
    },
    resize: {
        
    }

  });

const SignIn: React.FC<Props> = ({setAuth}) => {
    const [inUser, setInUser] = useState('');
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['person']);
    const classes = useStyles(); 

    const handleChangeU = (event: any) => {
        setInUser(event.target.value);
      }

    const login = () => {
        const url: string = 'http://localhost:3000/api/v1/profiles/';
        getReqAsync(url).then((a: Profile[]) => {
            
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
        getReqAsync(url).then((a: Profile[]) => {
            
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
        <div className="sign">
            <form className="form" id='sign' noValidate autoComplete="off">
                <TextField 
                    value={inUser} 
                    onChange={handleChangeU} id="username" label="username" 
                    InputProps={{
                        classes: {
                          input: classes.tf,
                        },
                      }}
                    />
            
                <br></br> <br></br>
                <Button style={{background:"#B67233"}} variant="contained" onClick={login}>
                    Login
                </Button>
            </form>
                <br></br> <br></br>
            <form className="form"id='register' noValidate autoComplete="off">
                <TextField 
                    value={inUser} 
                    onChange={handleChangeU} id="username" label="username" 
                    InputProps={{
                        classes: {
                          input: classes.tf,
                        },
                      }}
                    />   
                <br></br> <br></br>
                <Button style={{background:"#B67233"}} variant="contained" onClick={register}>
                    register
                </Button>
            </form>
        </div>
    );
};

export default SignIn;