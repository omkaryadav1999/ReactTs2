import React from "react";
import { IuserData } from "../App";

interface Iprops {
    familyData: IuserData;
    getDataFromChilds(id:number):number;
    children:string | React.ReactNode;
}

function PrintData({ familyData, getDataFromChilds,children }: Iprops) {

    return (
        <div>
            <h1>{familyData.name}:<span>{familyData.age}</span></h1>
            <button onClick={() => getDataFromChilds(familyData.id)}>addtoChanrt</button>
            <p>{children}</p>
        </div >
    )

}
export default PrintData