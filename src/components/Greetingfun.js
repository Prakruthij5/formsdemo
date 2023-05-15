import React,{useEffect,useState} from React;
import './Greetingfun.css';
import { useEffect } from 'react';

export default function Greetingfun(props){
    const [message,setMessage]=useState("Hello there from use state");
    const [ctr,setCtr]=useState(0);

    useEffect(()=>{console.Console.log(message);
        
        if(ctr===3){
            setMessage('ctr changed 3 times,now apply effect');
        }},[ctr]);
        const increment=()=>{
            setCtr(ctr+1);
        }
        
   
    return(
        <div className="container"><h1>{ctr}{message}</h1>
        <button onClick={increment}>Increment</button>
        </div>
    )
}