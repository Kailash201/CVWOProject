import { Button } from "@material-ui/core";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AddThread } from "../components/GetRequestJson";

const Submitted: React.FC = () => {
    const location = useLocation();
    const data: string[] = location.state;
    const response = AddThread("http://localhost:3000/api/v1/threadlists/", data[0].toString(), data[1].toString());
    console.log(response);
    console.log(data[0]);
    console.log(data[1]);
    return (
        <div>
            <h1>Hooray! Your post has been successfully submitted</h1>
            <Link to="/" style={{textDecoration: 'none'}}>
                <Button variant="contained">Go Back to Home</Button>
            </Link>
        </div>


    );
};

export default Submitted;