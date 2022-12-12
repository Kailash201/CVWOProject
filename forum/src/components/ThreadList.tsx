import ThreadItem from './ThreadItem';
import Thread from '../types/Threads';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';



const ThreadList: React.FC = () =>{
    const threads: Thread[] = [
        {   Title:"ddd",
            body:
                'Any fool can asdasdsad code that a computer can understand.\n' +
                'Good programmers write code that humans can understand.\n' +
                ' ~ Martin Fowler',
            User: 'Benedict',
            timestamp: new Date(2022, 10, 28, 10, 33, 30),
            id: 1,
        },
        {   Title:"lll",
            body: 'Code reuse is the Holy Grail of Software Engineering.\n ~ Douglas Crockford',
            User: 'Casey',
            timestamp: new Date(2022, 11, 1, 11, 11, 11),
            id: 2,
        },
        {   Title:"ooo",
            body: "Nine people can't make a baby in a month.\n" + ' ~ Fred Brooks',
            User: 'Duuet',
            timestamp: new Date(2022, 11, 2, 10, 30, 0),
            id: 3,
        },
    ]

return (
    <div>
        <ul>
            {threads.map((thread) => (<ThreadItem thread={thread}></ThreadItem>))}
        </ul>
    </div>
);


};

export default ThreadList;