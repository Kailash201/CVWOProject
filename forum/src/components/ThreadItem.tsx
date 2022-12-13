import Thread from "../types/Threads";
import { BrowserRouter, Link, Route } from "react-router-dom";
import react from "react";


type Props = {
    thread: Thread;
  
}


const ThreadItem: React.FC<Props> = ({thread}) => {
    const id = thread.id.toString();

return (
    <div>
        <ul>
            <li>{thread["title"]}</li>
            <li>{thread["desc"]}</li>
            <li>{thread["user"]}</li>
            <li>{thread["created_at"].toLocaleString()}</li>
            <li>{thread["id"]}</li>
            <Link to ="/thread" state ={thread["id"]}>
                {'View More'}
            </Link>
            
            <br></br>
        </ul>
    </div> 

);



};

export default ThreadItem;