import { Backdrop, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import Thread from "../types/Threads";
import CommentList from "./CommentList";
import { AddComment } from "./GetRequestJson";

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      backgroundColor: '#FFFBEB',
      display: 'flex',
      flexDirection: 'column',
      
    },
    header: {
      backgroundColor: '#FFFBEB',
      maxHeight: 20,
      textAlign: 'left'
      
    },
    title:{
        
    },
    body:{
      textAlign: 'left'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    paper: {
        diplay: 'flex',
        border: '2px solid #000',
        maxHeight: '90%',
        minHeight: '90%',
        minWidth: '90%',
        maxWidth: '90%',
        backgroundColor: '#FFF2C2',
        overflowY: 'auto',
      },
    comment: {
        width: '100%'
    }

  });

type Props = {
    thread: Thread;
    prev: boolean;
    func: Function;
    comlist: Thread[];
    comfunc: Function;
}

const ExpandView: React.FC<Props> = ({thread, prev, func, comlist, comfunc}) => {
   
    const classes = useStyles();
    const url: string = 'http://localhost:3000/api/v1/threadlists/' + thread['id'].toString() + '/comments';
    const [comment, setComment] = useState<string>('');
    const [commentList, setCommentList] = useState<Thread[]>([]);
    
    const handleChange = (event: any) => {
        setComment(event.target.value);
    }
    const handleClick = () => {
        AddComment(url, comment, setComment, comment).then((f) => 
                                        { comlist.push(f);
                                          comfunc(comlist);
                                          setComment('');
                                          return f;
                                        }); 

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
            <div className={classes.paper} >
                <h2>{thread['title']}</h2>
                <p>{thread['desc']}</p>
                <div>
                    <TextField 
                        className={classes.comment}
                        label="Enter Your Comment"
                        variant="outlined"
                        multiline
                        rows={10} maxRows={10}
                        onChange={handleChange}
                        value={comment}
                        >                   
                    </TextField>
                </div>
                <Button 
                    onClick={handleClick}>
                    sent
                </Button>
                <div >
                <div>
                    {comlist.map(comment => { console.log(comment)
                            return <CommentList 
                             cc={comment} 
                             id={comment['id'].toString()} 
                             tId={thread['id'].toString()} 
                             >
                           </CommentList>})}
                </div>
                    <Button style={{marginTop: '100%'}} onClick={() => func(false)}>Cancel</Button>
                </div>

            </div>
          </Fade>
        </Modal>
    )
}

export default ExpandView;