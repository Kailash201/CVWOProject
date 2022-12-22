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



type Props = {
    thread: Thread;
  
}
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


  
const ThreadItem: React.FC<Props> = ({thread}) => {
    const classes = useStyles();
    // for delete function
    const [status, setStatus] = useState<string>("");
    // to open and close modal
    const [open, setOpen] = useState(false);
    // get comment input
    const [comment, setComment] = useState<string>('');
    // commenturl
    const url: string = 'http://localhost:3000/api/v1/threadlists/' + thread['id'].toString() + '/comments';
    // delete thread url
    const delurl: string = "http://localhost:3000/api/v1/threadlists/" + thread['id'].toString();
    // get comments for that thread
    //const comments: Thread[] = GetRequestJson(url, 'data');
    // used to delete thread
    const box = document.getElementById(thread['id'].toString());
    // update comments on the go
    const [commentList, setCommentList] = useState<Thread[]>([]);
    // used for get request to get updated comments after opening modal
    const [comUp, setComUp] = useState<Thread[]>([]);
    const [openEdit, setEdit] = useState(false);
  


    // const handleChange = (event: any) => {
    //     setComment(event.target.value);
    // }
    // const handleClick = () => {
    //     AddComment(url, comment, setComment, comment).then((f) => 
    //                                     { commentList.push(f);
    //                                       setCommentList(commentList);
    //                                       setComment('');
    //                                       return f;
    //                                     }); 

    // }
    
return (
    <div id={thread['id'].toString()}>
        <Card className={classes.root}>
            <CardActionArea 
                component={Link} to="/" 
                state ={thread["id"]} 
                onClick={() => { getReqAsync(url, setComUp, comUp).then((a) => {setCommentList(a); setOpen(true);});            
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
            <div>
                <Button onClick={() => {DeleteThread(delurl, setStatus, status); box?.remove()}}>
                    delete
                </Button>
                <Button onClick={() => setEdit(true)}>
                    edit
                </Button>
            </div>
        </Card>
        <div id='editModal'>
            {openEdit ? (<EditThread prev={openEdit} func={setEdit}></EditThread>) : null}
        </div>
        <div id='viewpost'>
            {open ? (<ExpandView comfunc={setCommentList} comlist={commentList} thread={thread} prev={open} func={setOpen}></ExpandView>) : <p></p>}
        </div>
       
        <br></br> <br></br> <br></br>
    </div> 

);

};

export default ThreadItem;