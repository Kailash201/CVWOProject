import { Backdrop, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";

type Props = {
    //func: Function;
    prev: boolean;
    func: Function;
}

const useStyles = makeStyles({
    modal: {

    },
    paper:{

    },
    form:{
        
    },
    buts:{

    }
});

const EditThread: React.FC<Props> = ({prev, func}) => {
    const classes = useStyles();
    const [inTitle, setIntitle] = useState('');
    const [inBody, setInBody] = useState('');

    const handleChangeT = (event: any) => {
        setIntitle(event.target.value);
      }
    const handleChangeB = (event: any) => {
    setInBody(event.target.value);
    }
    
                                                                            
return (
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
                value={inTitle} onChange={handleChangeT} id="Title" label="Title of your post" />
            <br></br>
            <TextField  
                multiline value={inBody} onChange={handleChangeB}
                rows={16} id="body" label="Your Content" variant="outlined" />
            </form>
            <div className={classes.buts}>
            
                <Button 
                variant='contained' 
                >
                    Update
                </Button>
            
            <Button onClick={() => func(false)}>Cancel</Button>
            </div>
        </div>
        </Fade>
    </Modal>
);

}

export default EditThread;