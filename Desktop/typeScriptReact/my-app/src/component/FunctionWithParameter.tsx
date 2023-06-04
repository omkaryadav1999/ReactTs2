import React,{useState} from "react";

interface IState{
    message:string
}


const FunctionWithParamter:React.FC=()=>{
   const [state,setState] = useState<IState>({message:"welcome"})
    
const HandleLike = (arg:string):void=>{
    setState({message:arg})
}
const HandleDisLike = (arg:string):void=>{
    setState({message:arg})
}
const Handlevoid = (arg:string):void=>{
    setState({message:arg})
}
    return(
        <>
           <h1>{state.message}</h1>
           <button onClick={()=>HandleLike("LIKE")}>LIKE</button>
           <button onClick={()=>HandleDisLike("DisLike")}>DisLike</button>
           <button onClick={()=>Handlevoid("Avoid")}>Avoid</button>
        </>
    )
}

export default FunctionWithParamter