import React from "react";
import Tag from "../types/Tag";
import { GetRequestJson } from "./GetRequestJson";
import Chip from '@material-ui/core/Chip';

type Props = {
    id: number;
  
}

const TagList: React.FC<Props> = ({id})=> {
    const urlTag: string = 'http://localhost:3000/api/v1/tags/';
    let tags :Tag[] = GetRequestJson(urlTag, "data");
    tags = tags.filter(tag => tag['thread_list_id'] === id);
    let count = 0;
    return(
        <div  className="but"> 
            {tags.map(tag => {
                if(count < 5){
                    count++;
                    return count < 5 ? <Chip 
                                        style={{background:"#A2E4B8"}}
                                        label={tag['name']}
                                        />  
                                        : <Chip style={{background:"#A2E4B8"}} label='...'/>             
                }       
                })}
        </div>
    )
}

 export default TagList;