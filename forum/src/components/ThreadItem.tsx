import Thread from "../types/Threads";
import { BrowserRouter, Link, Route } from "react-router-dom";
import react from "react";
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
import { CardActionArea, makeStyles } from "@material-ui/core";
import { toDate } from "./DateTimeFormat";
import Expand from "./ExpandView";


type Props = {
    thread: Thread;
  
}
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      backgroundColor: '#A8D0E6',
      display: 'flex',
      flexDirection: 'column',
      
    },
    header: {
      backgroundColor: '#F8E9A1',
      maxHeight: 20,
      textAlign: 'left'
      
    },
    title:{
        
    },
    body:{
      textAlign: 'left'
    }

  });


  
const ThreadItem: React.FC<Props> = ({thread}) => {
    const classes = useStyles();

return (
    <div>
        <Card className={classes.root}>
            <CardActionArea component={Link} to="/thread" state ={thread["id"]}>
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
            <Link to="/delete" state={thread["id"]}>
                delete
            </Link>
        </Card>
        <br></br> <br></br> <br></br>
    </div> 

);



};

export default ThreadItem;