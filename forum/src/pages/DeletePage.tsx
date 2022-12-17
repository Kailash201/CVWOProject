import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { DeleteThread } from "../components/GetRequestJson";
import Home from "./Home";

const Aa: React.FC = () => {
    const location = useLocation();
    const data: number = location.state;
    const url: string = "http://localhost:3000/api/v1/threadlists/" + data.toString();
    const g = DeleteThread(url);
    console.log(g);
    return(
        <div>
            <h1>The thread has been deleted</h1>
            <Link to="/" style={{textDecoration: 'none'}}> 
                <Button variant="contained"> return to home page</Button> 
            </Link> 
        </div>
    );
}; 

export default Aa;