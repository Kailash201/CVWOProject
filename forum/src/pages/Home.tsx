import React from 'react';
import { GetThreadlists } from '../components/ThreadList';



const Home: React.FC = () => {
    return (
        <>
            <h3>
                {"Welcome to CVWO's sample react app! Here's a basic list of forum threads for you to experiment with."}
            </h3>
            <br />
            <GetThreadlists />
        </>
    );
};

export default Home;
