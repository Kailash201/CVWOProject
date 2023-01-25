
import React, { useState } from 'react';
import Header from '../components/Header';
import { GetThreadlists } from '../components/ThreadList';
import { useLocation } from 'react-router-dom'
import { getReqAsync, GetRequestJson } from '../components/GetRequestJson';
import Tag from '../types/Tag';
import Thread from '../types/Threads';
import ThreadItem from '../components/ThreadItem';
import { useCookies } from 'react-cookie';
import Comment from '../types/Comment';
import CommentList from '../components/CommentList';


const Profile: React.FC = () => {
    const location = useLocation()
    //const { tagName } = location.state
    const [cookies, setCookies] = useCookies(['person']);
    // const [s, ss] = useState();
    // const [r, rr] = useState(false);

    const id: string = cookies.person['name'];
    const urlPro: string = 'http://localhost:3000/api/v1/profiles/';
    const urlThlist: string = 'http://localhost:3000/api/v1/threadlists/';
    let proThread :Thread[] = []; 
    //let proCom :Comment[] = [];
    //let n = 0;
    //const pro :Tag[] = GetRequestJson(urlPro, "data");
    const thlist :Thread[] = GetRequestJson(urlThlist, "data");
    // thlist.map(thread => {
    //     getReqAsync(urlThlist + thread['id'].toString() + "/comments", ss).then(res => {res.map((comment :Comment) => {
    //         if(comment['user'] === id){
    //              proCom[n] = comment;
    //             // //proCom.push(comment);
    //             // console.log(comment);
    //              n++;
    //         }
    //     }); rr(true)});
    //     ///;

    // })

    proThread = thlist.filter(thread => thread['user'] === id);
    
    
    // let threadlistIds :Tag[] = tags.filter(tag => tag['name'] === tagName);
    // let res :Thread[] = [];
    // let n = 0;
    // threadlistIds.map(tag => {
    //     thlist.map(thread => {
    //         if (thread['id'] === tag['thread_list_id']){
    //             res[n] = thread;
    //             n++;
    //         }
    //     })
    // })
    // console.log(threadlistIds);
    // console.log(res);{res.map(single => <ThreadItem thread={single}></ThreadItem> )
    //console.log(pro);
    console.log(proThread);
    
    return (
        <div className='profile'>
            <Header></Header>
            <h2>Your Posts</h2>
            <div>
                <div className='Main'>
                    {proThread.map(thread => <ThreadItem thread={thread}></ThreadItem> )}
                </div>
                <div className='cc'>
                {/* { console.log(proCom)}   
                    {proCom?.map(comment => {console.log("single", comment); return <CommentList 
                                                cc={comment} 
                                                id={comment['id'].toString()} 
                                                tId={comment['thread_list_id'].toString()} 
                                                >
                                            </CommentList> }
                                                )} */}
                                               
                </div>
            </div>
            
        </div>
    );
};

export default Profile;