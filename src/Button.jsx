import { useEffect, useState } from "react";

function Button({countToDisplay}){
    const [count, setCount] = useState(0)
    useEffect(() =>{
        countToDisplay(count);
    },[count]) //[count] = dependency array 
    return (
    <button onClick={() => setCount((count) => count + 1)}>
          Click Me
    </button>      
    )
} 

export default Button;