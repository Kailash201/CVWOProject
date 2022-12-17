import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import ThreadItem from "../components/ThreadItem";
import Thread from "../types/Threads";



const Singlethread: React.FC = () => {
const location = useLocation();
const data: number = location.state;
const url: string = "http://localhost:3000/api/v1/threadlists/" + data.toString();

const [threads, setthreads] = useState<Thread>();

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch(url)
            .then(response => response.json())
            .then(data => setthreads(data['data']));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    
return(
    <div>
        <Header></Header>
        <br></br> <br></br>
        {threads && <ThreadItem thread={threads}></ThreadItem>}
    </div>
);

};

export default Singlethread;