import React,{useState} from "react";

type count = number

interface IState{
    count:number
}

const  Counter:React.FC=()=>{
const [state,setState] = useState<count>(0);
const [value,setValue] = useState<IState>({count:0})


const handleClickIn = ()=>{
    setValue({count:value.count+1})
}

const handleClickDe = ()=>{
    setValue({count:value.count-1})
}

    return(
        <>
          <h1>counter:{state}</h1>
          <button onClick={()=>setState(state+1)}>increment</button>
          <button onClick={()=>setState(state-1)}>Decrement</button> 
          <h2>OR</h2>
          <h1>another counter:{value.count}</h1>
          <button onClick={handleClickIn}>increment</button>
          <button onClick={handleClickDe}>Decrement</button>
        </>
    )

}

export default Counter