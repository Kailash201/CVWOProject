import { Backdrop, createStyles, makeStyles, Snackbar, Theme } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { ChangeComment } from "./GetRequestJson";

type Props = {
    //func: Function;
    prev: boolean;
    func: Function;
    body: string;
    id: string;
}

const useStyles = makeStyles((theme: Theme) =>
createStyles({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper:{
        backgroundColor: '#FFF2C2',
        border: '2px solid #000',
        padding: theme.spacing(2, 4, 3),
        minHeight: 500,
        minWidth: 500
    },
    form:{
        display: 'flex',
        flexDirection: 'column',
    },
    buts:{
        display: 'flex',
        marginTop: 30,
        justifyContent: 'space-evenly',
        flexGrow: 1,
    }
    ,
    sb:{
        background:"#B67233"
    }
}));

const EditComment: React.FC<Props> = ({prev, func, body, id}) => {
    const classes = useStyles();
    const [inBody, setInBody] = useState(body);
    const [openSb, setOpenSb] = useState(false);
    const url: string = "http://localhost:3000/api/v1/threadlists/" + id.toString();
    
    const handleChangeB = (event: any) => {
        setInBody(event.target.value);
    }
    
    
                                                                            
return (
    <div>
        <Modal
            disableEscapeKeyDown={true}    
            className={classes.modal}
            open={prev}
            onClose={(reason) => reason !== "backdropClick" ? func(true) : func(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={prev}>
            <div className={classes.paper}>
                <form className={classes.form} noValidate autoComplete="off">
                
                <TextField  
                    multiline value={inBody} onChange={handleChangeB}
                    rows={16} id="body" label="Your Comment" variant="outlined" />
                </form>
                <div className={classes.buts}>
                
                    <Button 
                    variant='contained' onClick={() => {ChangeComment(url, inBody); 
                        setOpenSb(true);}}
                        className={classes.sb}>
                        Update
                    </Button>
                
                <Button onClick={() => func(false)}>Cancel</Button>
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
            onClose={() => {setOpenSb(false); func(false); window.location.reload();}}
            message="Post being updated" 
          />
        </div>
    </div>
);

}

export default EditComment;