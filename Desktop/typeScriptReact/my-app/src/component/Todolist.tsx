import React,{useState} from "react";

// controled component.

function TodoList(){
  const [value,setValue] = useState("")  //we dont need to give the type for the number,string,and for boolean typescript automatically understand it
const [data,setData] = useState<string[]>([])  // we need to give the type to the obejct,arry and for funcion

const AddData = ()=>{
    setData([...data,value])
    setValue("")
}

const outSideonChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setValue(e.target.value)
}

console.log(data)
    return(
        <>
          <input type="text"
           value={value}
        //    onChange={(e)=>setValue(e.target.value)}
           onChange={outSideonChange}
            />
            <button onClick={AddData}>submit</button>
        </>
    )

}

export default TodoList