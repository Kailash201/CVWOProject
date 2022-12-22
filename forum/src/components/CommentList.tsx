import { Button, CardContent, makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import React, { useState } from "react";
import { idText } from 'typescript';
import Thread from "../types/Threads";
import { DeleteThread, GetRequestJson } from './GetRequestJson';

type Props = {
    //comment: Thread;
    cc: Thread;
    id: string;
    tId: string;

}

const useStyles = makeStyles({
    card: {
        backgroundColor: '#FFFBEB',
        width: '80%',
        height: 70
        
    },

});

const CommentList: React.FC<Props> = ({cc, id, tId}) => {
    const classes = useStyles();
    const comurl: string = "http://localhost:3000/api/v1/threadlists/" + tId + "/comments/" + id;
    const [state, setState] = useState<string>("");
    //const box = document.getElementById('com' + id);
    //const commentList: Thread[] = GetRequestJson(comurl, "data");
    const handleClick = () => {
       // const target = commentList.find(com => com['desc'] === cc )
       // console.log("1",target);
       DeleteThread(comurl, setState, state).then((a) => {
            const box = document.getElementById('com' + id);
            box?.remove();
           

        } ).catch((a) => console.log(a));
       
    }
    
    return (
        
        <div id={'com' + id}>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="body2" component='p'>
                        {cc['desc']}{cc['id']}
                    </Typography>
                </CardContent>
                <Button onClick={handleClick}>
                    delete
                </Button>
            </Card>
            <br></br><br></br><br></br>
        </div>
        
        );

};

export default CommentList;