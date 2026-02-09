import { useEffect, useState } from "react";

function Button({countToDisplay,buttonName}){
    const [count, setCount] = useState(0);
    useEffect(() =>{
        countToDisplay(count);
    },[count]) //[count] = dependency array 
    return (
    <button onClick={() => setCount((count) => count + 1)}>
        {buttonName}
    </button>      
    )
} 

export default Button;