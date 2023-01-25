import React, {useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, TextField } from '@material-ui/core';
import { AddTag, AddThread } from './GetRequestJson';
import Snackbar from '@material-ui/core/Snackbar';
import { Cookies, useCookies } from 'react-cookie';
import MultipleSelect from './ChipTag';
import Thread from '../types/Threads';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: '#FFF2C2',
      border: '2px solid #000',
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
    },
    sb:{
      background:"#B67233"
  }
  }),
);

export default function Newpostmodal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openSb, setOpenSb] = useState(false);
  const [inTitle, setIntitle] = useState('');
  const [inBody, setInBody] = useState('');
  const [cookies, setCookies] = useCookies(['person']);
  const [tags, setTags] = useState<string[]>([]);



  const addurl: string = "http://localhost:3000/api/v1/profiles/" + cookies.person['id'].toString() + "/threadlists";
    
  const handleChangeT = (event: any) => {
    setIntitle(event.target.value);
  }
  const handleChangeB = (event: any) => {
    setInBody(event.target.value);
  }
  const handleClick = (res: Thread) => {
    setIntitle("");
    setInBody("");
    setOpen(false);
    setOpenSb(true);
    const url: string = "http://localhost:3000/api/v1/threadlists/" + res['id'] + "/tags";
        for(let i = 0; i < tags.length; i++){
            AddTag(url, tags[i]);
        }
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
                <MultipleSelect listTags={tags} setTags={setTags}></MultipleSelect>
              </form>
              <div className={classes.buts}>
                  <Button 
                    variant='contained' 
                    className={classes.sb}
                    onClick={() => {AddThread(addurl, inTitle, inBody, cookies.person['name']).then(res => {handleClick(res);
                                                                                                                        }); }}>
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
            onClose={() => {setOpenSb(false); window.location.reload()}}
            message="Post Uploaded"
            
          />
      </div>
    </div>
  );
}
