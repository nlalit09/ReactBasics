import { useState } from "react"
export function Authentication(){
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [success,setSuccess]=useState(false)
    const [error,setError]=useState(false)
    function handleSubmit(e){
        e.preventDefault();
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(email.value.match(validRegex) && password!=""){
            setTimeout(() => {
                
                setSuccess(true);
                setTimeout(() => setSuccess(false), 2000);
              }, 2000);
        }
        else{
            setError(true);
        }

        console.log(success);
        console.log(error);

    }
   


    return(
        <>
            <form onSubmit={handleSubmit}>
                <p>Email:</p>
                <input typle="text" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)} required/>
                <p>Password:</p>
                <input type="text" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} required/>
                <button type="Submit">Submit</button>
                {success && <p>Welcome back!</p>}
                 {error && <p>Are you a hacker or just forgetful? Try again😁</p>}
        
            </form>
        </>

    )
}