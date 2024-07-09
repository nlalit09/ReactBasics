
import { useState } from "react"
function Button(){
    const [count,setCount]=useState(0);
    function buttonhandler(){
        
        console.log("You clicked the button");
        setCount(count+1);
        console.log(count);
    }
    return(
    <button onClick={buttonhandler}>Enter {count}</button>
    )
}
export default Button