import React, { useState, useEffect } from 'react';



function GetRequestJSon(link: string, tag: string) {
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
export default GetRequestJSon;
