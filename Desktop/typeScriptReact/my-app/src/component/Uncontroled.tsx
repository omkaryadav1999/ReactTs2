import React, { useRef, useState } from "react";


function Uncontroled() {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [data, setData] = useState<string[]>([]);

    const AddData = () => {
        if (inputRef.current) {
            const todo = inputRef.current.value
            setData([...data, todo])
        }
    }
    return (
        <>
            <input type="text"
                ref={inputRef}
            />
            <button onClick={AddData}>submit</button>
            <ul>
                {data.map((item)=>{
                    return <li key={item}>{item}</li>
                })}
            </ul>
        </>
    )
}

export default Uncontroled