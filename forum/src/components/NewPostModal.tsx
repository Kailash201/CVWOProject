import React, { useRef, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, TextField } from '@material-ui/core';
import { AddThread } from './GetRequestJson';
import { redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
      flexDirection: 'column'

    },
    title: {
      fontSize: 15,   
      height: 30,
      width: 120,
      background: '#F8E9A1'
           
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
  const [inTitle, setIntitle] = useState('');
  const [inBody, setInBody] = useState('');

  const handleChangeT = (event: any) => {
    setIntitle(event.target.value);
  }
  const handleChangeB = (event: any) => {
    setInBody(event.target.value);
  }

  const submit = () => {
    return redirect("/submit")
  }

  return (
    <div>
      <Button variant="contained" className={classes.title} onClick={() => setOpen(true)} >
        New Post
      </Button>
      <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
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
                <Link to="/submit" state={[inTitle, inBody]} style = {{textDecoration: 'none'}}>
                  <Button onClick={submit} variant='contained'>Submit</Button>
                </Link>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
              </div>
            </div>
          </Fade>
      </Modal>
    </div>
  );
}
