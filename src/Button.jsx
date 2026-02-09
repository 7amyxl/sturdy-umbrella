import { useReducer } from "react";
import { useEffect, useState } from "react";

function Button({countToDisplay}){
    // const [count, setCount] = useState(0); [name,stateUpdateFunction] = useState(if you return string = '' if you return number = 0); when we need some simple state management we use useState();

    const myReducer = (state,action) =>{
        if(action.type == "increment"){
            return {count: state.count + 1}
        }
        else{
            return {count: state.count - 1}
        }
    }

    const [state,disPatch] = useReducer(myReducer,{count:0}); // when we need some advanced state management we use useReducer(); [reducerFunction,InitialState] = useReducer();

    useEffect(() =>{
        countToDisplay(state.count);
    },[state.count]) //[count] = dependency array 

    return (
    <>
    <button onClick={() => disPatch({type: "increment"})}>
        Increment
    </button>      

    <button onClick={() => disPatch({type: "decrement"})}>
        Decrement
    </button>      
    </>
    )
} 

export default Button;