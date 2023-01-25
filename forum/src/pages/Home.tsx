import { lightBlue } from '@material-ui/core/colors';
import React from 'react';
import Header from '../components/Header';
import { GetThreadlists } from '../components/ThreadList';




const Home: React.FC = () => {
    return (
        <div className='main'>
            <Header></Header>
            <h3 >
                {"CVWO's forum"}
            </h3>
            <br />
            <GetThreadlists />
        </div>
    );
};

export default Home;
