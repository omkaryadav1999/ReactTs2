import React,{useState} from "react";
import PrintData from "./component/PrintData";
import TodoList from "./component/Todolist";
import Uncontroled from "./component/Uncontroled";
import Counter from "./component/Counter";
import FunctionWithParamter from "./component/FunctionWithParameter";

export  interface IuserData {
  id:number,
  name:string,
  age:number
}

function App(){
const [data,setData]  = useState<IuserData[]>([
  {
    id:1,
    name:"sanjay",
    age:55
  },
  {
  id:2,
  name:"surekha",
  age:56
  },
  {
    id:3,
    name:"megha",
    age:28
  },
  {
    id:4,
    name:"mayuri",
    age:26
  },
  {
    id:5,
    name:"omkar",
    age:24
  },
  {
id:6,
name:"mamta",
age:22
  }
])

const getDataFromChild = (id:number):number=>{
  console.log(id)
  return id
}

  return(
    <>
    <h3>controled</h3>
      <TodoList/>
      <h3>Uncontroled</h3>
      <Uncontroled/>
      {
        data.map((familyData)=> <PrintData familyData={familyData} key={familyData.id} getDataFromChilds={getDataFromChild}>
              pass the childeren as the props 
              &nbsp;<span>also with the help of element</span>
        </PrintData>)
      }
      <Counter/>
      <FunctionWithParamter/>
    </>
  )

}

export default App 