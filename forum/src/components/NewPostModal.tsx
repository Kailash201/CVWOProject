import React, { useEffect, useRef, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, TextField } from '@material-ui/core';
import { AddThread } from './GetRequestJson';
import Snackbar from '@material-ui/core/Snackbar';
import { setTimeout } from 'timers';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      minHeight: 500,
      minWidth: 500
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      

    },
    title: {
      fontSize: 15,   
      height: 30,
      width: 120,
      background: '#FFFBEB'
           
    },
    buts: {
      display: 'flex',
      marginTop: 30,
      justifyContent: 'space-evenly',
      flexGrow: 1
    }
  }),
);

export default function Newpostmodal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openSb, setOpenSb] = useState(false);
  const [inTitle, setIntitle] = useState('');
  const [inBody, setInBody] = useState('');
  const [posts, setPosts] = useState('');
  const addurl: string = "http://localhost:3000/api/v1/threadlists/";
    
  const handleChangeT = (event: any) => {
    setIntitle(event.target.value);
  }
  const handleChangeB = (event: any) => {
    setInBody(event.target.value);
  }
  const handleClick = () => {
    setIntitle("");
    setInBody("");
    setOpen(false);
    setOpenSb(true);
  }

  return (
    <div>
      <Button variant="contained" className={classes.title} onClick={() => setOpen(true)} >
        New Post
      </Button>
      <Modal
          disableEscapeKeyDown={true}    
          className={classes.modal}
          open={open}
          onClose={(reason) => reason !== "backdropClick" ? setOpen(true) : setOpen(false)}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <form className={classes.form} noValidate autoComplete="off">
                <TextField 
                  value={inTitle} onChange={handleChangeT} id="Title" label="Title of your post" />
                <br></br>
                <TextField  
                  multiline value={inBody} onChange={handleChangeB}
                  rows={16} id="body" label="Your Content" variant="outlined" />
              </form>
              <div className={classes.buts}>
                
                  <Button 
                    variant='contained' 
                    onClick={() => {AddThread(addurl, posts, setPosts, inTitle, inBody); handleClick();}}>
                      Submit
                  </Button>
               
                <Button onClick={() => setOpen(false)}>Cancel</Button>
              </div>
            </div>
          </Fade>
      </Modal>
      <div className='alert'>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={openSb}
            autoHideDuration={2000}
            onClose={() => {setOpenSb(false); window.location.reload();}}
            message="Post Uploaded"
            
          />
      </div>
    </div>
  );
}
