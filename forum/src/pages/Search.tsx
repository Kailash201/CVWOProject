
import React, { useState } from 'react';
import Header from '../components/Header';
import { GetThreadlists } from '../components/ThreadList';
import { useLocation } from 'react-router-dom'
import { getReqAsync, GetRequestJson } from '../components/GetRequestJson';
import Tag from '../types/Tag';
import Thread from '../types/Threads';
import ThreadItem from '../components/ThreadItem';




const Search: React.FC = () => {
    const location = useLocation()
    const { tagName } = location.state

    const urlTag: string = 'http://localhost:3000/api/v1/tags/';
    const urlThlist: string = 'http://localhost:3000/api/v1/threadlists/';
    const tags :Tag[]= GetRequestJson(urlTag, "data");
    const thlist :Thread[]= GetRequestJson(urlThlist, "data");
    
    let threadlistIds :Tag[] = tags.filter(tag => tag['name'] === tagName);
    let res :Thread[] = [];
    let n = 0;
    threadlistIds.map(tag => {
        thlist.map(thread => {
            if (thread['id'] === tag['thread_list_id']){
                res[n] = thread;
                n++;
            }
        })
    })
    console.log(threadlistIds);
    console.log(res);{res.map(single => <ThreadItem thread={single}></ThreadItem> )}
    return (
        <div>
            <Header></Header>
            <h3>Results for {tagName}</h3>
            <div className='search Main'>         
                {res.map(single => <ThreadItem thread={single}></ThreadItem> )}
            </div>
        </div>
    );
};

export default Search;
