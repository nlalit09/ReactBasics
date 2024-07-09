import { useState, useEffect } from "react"
export function Usingstate(){
    const [name,setName]=useState("Lalitha")
    const [city,setCity]=useState("Mckinney")
    useEffect(()=>{
        if(city=="Mckinney"){
            setCity("Allen")
        }
        else{
            setCity("Frisco")
        }},[city])
    console.log(city);
    return(
        <>
            <h1>Name: {name}</h1>
            <p>City: {city}</p>
            <form>
               
                <input placeholder="Enter City" value={city} onChange={(e)=>setCity(e.target.value)}  type="text"/>
            </form>
            
        </>
    )
}

