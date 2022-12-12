import Thread from "../types/Threads";
import { BrowserRouter, Link, Route } from "react-router-dom";
import react from "react";
import Single from "../pages/SingleThreadView";
import App from "../App";

type Props = {
    thread: Thread;
  
}


const ThreadItem: React.FC<Props> = ({thread}) => {
    const id = thread.id.toString();

return (
    <div>
        <ul>
            <li>{thread.User}</li>
            <li>{thread.Title}</li>
            <li>{thread.body}</li>
            <li>{thread.timestamp.toLocaleString()}</li>
            <li>{thread.id}</li>
            <Link to={id}>{'View More'}</Link>
            
            <br></br>
        </ul>
    </div> 

);



};

export default ThreadItem;