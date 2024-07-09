import React from "react";
import { useState, useEffect } from "react"
export function ClickEvent(){
    const resize=()=>{
        const [screensize,setScreensize]=useState({
            width:window.innerWidth,
            height:window.innerHeight
        }
        );
    }
    useEffect(()=>{
        window.addEventListener('resize',updateScreenSize);
        return ()=>{
            window.removeEventListener('resize',updateScreenSize);
        }
    },[])
    const [number,setNumber]=useState(0);
    const increment=()=>{
        setNumber(number+1);
    }
    const decrement=()=>{
        if(number==0){
            setNumber(0)
        }
        else{
            setNumber(number-1);
        }
        
    }
    const reset=()=>{
        setNumber(0);
    }
    return(

        <>
            <div>{number}
            </div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement} >decrement</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}