import React from "react";

function toDate(rawdate: string){
    let formatedDate: string = "";
    for (let index = 0; index < rawdate.length; index++) {
        if(rawdate.charAt(index) !== "T"){
             formatedDate = formatedDate + rawdate.charAt(index);
        }
        else{
            break;
        }
        
    }
    return formatedDate;
}

export {toDate};