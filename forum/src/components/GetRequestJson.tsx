import React, { useState, useEffect } from 'react';
import Thread from '../types/Threads';



function GetRequestJson(link: string, tag: string) {
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
const getReqAsync = async (link: string) => {
    let data = null;
    try { 
        const response = await fetch(
        link, { method: 'GET' }
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      data = await response.json();

    }
    catch (err){
      console.log(err);
    }
    finally {
      return data['data'];

    }

}

const DeleteThread = async (link: string) => {
    let data = null;
    try { 
        const response = await fetch(
        link, { method: 'DELETE' }
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      data = await response.json();

    }
    catch (err){
      console.log(err);
    }
    finally {
      return data['data'];

    }

}

const AddThread = async (link: string, title: string, body: string, user: string) => {
  let data = null; 
    try { 
        const response = await fetch(
        link, { 
        method: 'POST',  headers: { 'Content-Type': 'application/json', Accept: 'application/json', }, 
        body: JSON.stringify({
        "desc": body,
        "title": title,
        "user": user
        }) }
        );
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
    
        data = await response.json();
        }
    catch (err){
        console.log(err);
    }
    finally {
    return data['data'];
    
    }
          
        
}

const ChangeThread = async (link: string, title: string, body: string) => {
  let data = null; 
    try { 
        const response = await fetch(
        link, { 
        method: 'PUT',  headers: { 'Content-Type': 'application/json', Accept: 'application/json', }, 
        body: JSON.stringify({
        "desc": body,
        "title": title,
        }) }
        );
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
    
        data = await response.json();
        }
    catch (err){
        console.log(err);
    }
    finally {
    return data['data'];
    
    }
          
        
}

const ChangeComment = async (link: string, body: string) => {
  let data = null; 
    try { 
        const response = await fetch(
        link, { 
        method: 'PUT',  headers: { 'Content-Type': 'application/json', Accept: 'application/json', }, 
        body: JSON.stringify({
        "desc": body,
        }) }
        );
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
    
        data = await response.json();
        }
    catch (err){
        console.log(err);
    }
    finally {
    return data['data'];
    
    }
          
        
}

const AddComment = async (link: string, body: string, user: string) => {
   let data = null; 
    try { 
            const response = await fetch(
            link, { 
            method: 'POST',  headers: { 'Content-Type': 'application/json', Accept: 'application/json', }, 
            body: JSON.stringify({
            "desc": body,
            "user": user
        }) }
        );
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
    
        data = await response.json();

        }
        catch (err){
            console.log(err);
        }
        finally {
            return data['data'];            
        
        }
          
        
}

const AddProfile = async (link: string, body: string) => {
  let data = null; 
   try { 
      const response = await fetch(
      link, { 
      method: 'POST',  headers: { 'Content-Type': 'application/json', Accept: 'application/json', }, 
      body: JSON.stringify({
      "user": body,
      }) }
      );
      if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
      }
      data = await response.json();

      }
    catch (err){
      console.log(err);
    }
    finally {
      return data['data'];               
    }
  }

const AddTag = async (link: string, body: string) => {
  let data = null; 
    try { 
        const response = await fetch(
        link, { 
        method: 'POST',  headers: { 'Content-Type': 'application/json', Accept: 'application/json', }, 
        body: JSON.stringify({
        "name": body,
        }) }
        );
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
        data = await response.json();
        console.log("tag",data['message']);
        console.log("tag",data['data']);
        }
    catch (err){
        console.log(err);
    }
    finally {
    return data['data'];               
    }
         
       
}





export {GetRequestJson, DeleteThread, AddThread, AddComment, getReqAsync, AddProfile, AddTag, ChangeThread, ChangeComment};
