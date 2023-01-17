import React, { useCallback, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu'
import { Link, redirect, useNavigate } from 'react-router-dom';
import Newpostmodal from './NewPostModal';
import { Backdrop, Fade, Modal, TextField } from '@material-ui/core';
import { Cookies, useCookies } from 'react-cookie';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#AC4425',
      minHeight: 40,
      flexGrow: 1
    },
    title: {
      fontSize: 15,   
      height: 30,
      width: 120,
      background: '#FFFBEB '
           
    },
    head: {
      flexGrow: 1,     
    },
    but: {
      textDecoration: 'none'
    },
  }),
);

export default function Header() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['person']);

  const handleClick = () => {
    removeCookie('person');
    return navigate("/");
  }

  return (
    <div>
      <AppBar position='static'>
        <Toolbar className={classes.root}>
          <div className={classes.head}>
            <Link to="/" className={classes.but}>
              <Button variant="contained" className={classes.title} >
                  Home
              </Button>
            </Link>
          </div>
          <div className={classes.head}>
            <Link to="/" className={classes.but}>
              <Button variant="contained" className={classes.title} >
                  Profile
              </Button>
            </Link>
          </div>
          <div className={classes.head}>
            <Newpostmodal></Newpostmodal>
          </div>

          <div className={classes.head}>
           <Link to="/" className={classes.but}>
              <Button variant="contained" className={classes.title} >
                  Search
              </Button>
            </Link>
          </div>  
          <div className={classes.head}>
            <Button variant="contained" className={classes.title} onClick={handleClick}>
                Log out
            </Button>
          </div>       
        </Toolbar>
      </AppBar>
    </div>
  );
}