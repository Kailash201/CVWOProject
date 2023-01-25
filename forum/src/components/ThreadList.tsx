import ThreadItem from './ThreadItem';
import {GetRequestJson} from './GetRequestJson';
import Thread from '../types/Threads';

function GetThreadlists() {
    const threads: Thread[] = GetRequestJson('http://localhost:3000/api/v1/threadlists', 'data')
    return (
        <div className="Main">
            <h3 className="card-header">Discussions</h3>
            <div className="card-body">
            
                {threads.map(single => <ThreadItem thread={single}></ThreadItem> )}
           
                
            </div>
        </div>
    );
}

export { GetThreadlists };