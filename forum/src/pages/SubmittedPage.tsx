import { Button } from "@material-ui/core";
import React from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import { AddThread } from "../components/GetRequestJson";

const Submitted: React.FC = () => {
    const location = useLocation();
    const data: string[] = location.state;
    console.log(data[0]);
    console.log(data[1]);
    return (
       <Navigate to="/"></Navigate>

    );
};

export default Submitted;