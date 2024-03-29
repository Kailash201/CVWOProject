import React from 'react';

type Comment = {
    "desc": string;
    "user": string;
    "created_at": Date;
    "id": number;
    "thread_list_id": number;
};

export default Comment;
