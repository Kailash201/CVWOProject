import Thread from "../types/Threads";
import { BrowserRouter, Link, Route } from "react-router-dom";
import react, { useState } from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Backdrop, Button, CardActionArea, Fade, makeStyles, Modal, TextField } from "@material-ui/core";
import { toDate } from "./DateTimeFormat";
import { getReqAsync, DeleteThread, AddComment} from "./GetRequestJson";
import CommentList from "./CommentList";
import EditThread from "./EditThread";
import ExpandView from "./ExpandView";
import { useCookies } from 'react-cookie';
import TagList from "./TagList";
import Comment from '../types/Comment';



type Props = {
    thread: Thread;
  
}
const useStyles = makeStyles({
    root: {
      width: '100%',
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
        backgroundColor: '#AB784E',
 
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


  
const ThreadItem: React.FC<Props> = ({thread}) => {
    const classes = useStyles();
    // for delete function
    const [status, setStatus] = useState<string>("");
    // to open and close modal
    const [open, setOpen] = useState(false);
    // commenturl
    const url: string = 'http://localhost:3000/api/v1/threadlists/' + thread['id'].toString() + '/comments';
    // delete thread url
    const delurl: string = "http://localhost:3000/api/v1/threadlists/" + thread['id'].toString();
    // get comments for that thread
    //const comments: Thread[] = GetRequestJson(url, 'data');
    // update comments on the go
    const [commentList, setCommentList] = useState<Comment[]>([]);
    // used for get request to get updated comments after opening modal
    const [comUp, setComUp] = useState<Thread[]>([]);
    const [openEdit, setEdit] = useState(false);
    const [cookies, setCookie] = useCookies(['person']);
  
return (
    <div id={thread['id'].toString()}>
        <Card className={classes.root}>
            <CardActionArea    
                onClick={() => { getReqAsync(url).then((a) => {setCommentList(a); setOpen(true);});            
                }}>
                <CardHeader 
                    subheader={ <Typography variant="h6"> {thread['title']} </Typography>} 
                    title={<Typography variant='caption'>
                            {"Posted by " + thread['user'] + " " + "at " + toDate(thread['created_at'].toString())}
                            </Typography>}
                    className={classes.header}>
                </CardHeader>
                <CardMedia></CardMedia>

                <CardContent className={classes.body}>
                    <Typography variant="body2" component='p'>
                        {thread['desc']}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <div id="tags">
                <TagList id={thread['id']}></TagList>
            </div>
        </Card>{
        cookies.person['id'] === thread['profile_id'] ?
            <div className={classes.title}>
                <Button onClick={() => {
                    DeleteThread(delurl); 
                    const box = document.getElementById(thread['id'].toString());
                    box?.remove();}}>
                    delete
                </Button>
                <Button onClick={() => setEdit(true)}>
                    edit
                </Button>
            </div>
            : null
            }   
        <div id='editModal'>
            {openEdit ? (<EditThread prev={openEdit} func={setEdit} 
                                    title={thread['title']} body={thread['desc']} id={thread['id']}>
                                    </EditThread>) : null}
        </div>
        <div id='viewpost'>
            {open ? (<ExpandView comfunc={setCommentList} comlist={commentList} thread={thread} prev={open} func={setOpen}></ExpandView>) : <p></p>}
        </div>
       
        <br></br> <br></br> <br></br>
    </div> 

);

};

export default ThreadItem;