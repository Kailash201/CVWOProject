import { Button, CardContent, makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import React, { useState } from "react";
import { DeleteThread,} from './GetRequestJson';
import Comment from '../types/Comment';
import { useCookies } from 'react-cookie';
import EditComment from './EditComment';

type Props = {
    //comment: Thread;
    cc: Comment;
    id: string;
    tId: string;

}

const useStyles = makeStyles({
    card: {
        backgroundColor: '#FFFBEB',
        width: '80%',
        minheight: 90,
        
    },

});

const CommentList: React.FC<Props> = ({cc, id, tId}) => {
    const classes = useStyles();
    const comurl: string = "http://localhost:3000/api/v1/threadlists/" + tId + "/comments/" + id;
    const [state, setState] = useState<string>("");
    const [cookies, setcookies] = useCookies(['person']);
    const [open, setOpen] = useState(false)
   
    const handleClick = () => {
    
       DeleteThread(comurl).then((a) => {
            const box = document.getElementById('com' + id);
            box?.remove();
    
        } ).catch((a) => console.log(a));
       
    }

    const handleClickOne = () => {
    
        setOpen(true);
        
     }
    
    return (
        
        <div className="com" id={'com' + id}>
            <Card className={classes.card}>
                <div className='cancel'>
                    <p className='header'>{cc['user']}</p>
                    {cookies.person['name'] === cc['user'] 
                    ?   <div>
                        <Button onClick={handleClick}>
                            Delete
                        </Button>
                        <Button onClick={handleClickOne}>
                            Edit
                        </Button>
                        </div>
                    : null
                    }
                </div>
                <CardContent className='comd' >
                    <Typography className='comd' variant="body2" component='p'>
                        {cc['desc']}
                    </Typography>
                </CardContent>
               
            </Card>
            <EditComment prev={open} func={setOpen} body={cc['desc']} id={tId}></EditComment>
        </div>
        
        );

};

export default CommentList;