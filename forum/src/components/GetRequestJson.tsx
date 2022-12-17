import React, { useState, useEffect } from 'react';



function GetRequestJson(link: string, tag: string) {
    const [threads, setthreads] = useState([]);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch(link)
            .then(response => response.json())
            .then(data => setthreads(data[tag]));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return threads;
}

const DeleteThread = (link: string) => {
    const [status, setStatus] = useState<string>();

    useEffect(() => {
        // DELETE request using fetch inside useEffect React hook
        fetch(link, { method: 'DELETE' })
        .then(response => response.json())
        .then(data => setStatus(data));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return status;
}

const AddThread = (link: string, title: string, body: string) => {
    const [status, setStatus] = useState<string>();

    useEffect(() => {
        fetch(link, { method: 'POST',  headers: { 'Content-Type': 'application/json' }, 
                      body: JSON.stringify({
                        "desc": body,
                        "title": title
                    }) })
        .then(response => response.json())
        .then(data => setStatus(data['message']));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return status;
}





export {GetRequestJson, DeleteThread, AddThread};
