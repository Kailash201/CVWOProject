import React, { useState, useEffect } from 'react';
import ThreadItem from './ThreadItem';
import {GetRequestJson} from './GetRequestJson';
import Thread from '../types/Threads';

function GetThreadlists() {
    const threads: Thread[] = GetRequestJson('http://localhost:3000/api/v1/threadlists', 'data')
    return (
        <div className="MainList">
            <h5 className="card-header">Discussions</h5>
            <div className="card-body">
            
                {threads.map(single => <ThreadItem thread={single}></ThreadItem> )}
           
                
            </div>
        </div>
    );
}

export { GetThreadlists };