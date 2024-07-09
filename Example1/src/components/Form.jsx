import {useState} from "react"
function Form(){
    const [name,setName]=useState("");
    const [msg,setMessage]=useState("");
    function handleSubmit(){
        console.log("submitted");
    }
    return(
        <>
        <form>
        <input onChange={((e)=> setName(e.target.value))}></input>
        <textarea onChange={((e)=>setMessage(e.target.value))} />
       
        <button onClick={handleSubmit}>Submit</button>
        <h1>Name is:{name}</h1>
        <h1>Message is:{msg} </h1>
        </form>
        </>

    )
}
export default Form