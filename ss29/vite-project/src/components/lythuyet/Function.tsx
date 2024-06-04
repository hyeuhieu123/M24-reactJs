import React, { useState } from 'react'

export default function Function() {
    const [username,setUsername]=useState<string>("");
    // khai bao ham su ly khi click
    const handleClick = () => {
        console.log("hello click");
    };
    
    // gọi hàm theo kiểu truyền tham số 
    const handldeDelete =(userID:any) => {
        console.log('userId',userID);
        
    };
    //khai bao hàm dang ky
    const register = () => {
        console.log("da an vao ham dang ky",username);
        
    };
    //khai bao ham handleChange
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        // console.log('11111',e.target.value);
        setUsername(e.target.value);
    };
  return (
    <div>Function
        <p onClick={()=>handldeDelete(5)}>hoa</p>
        <button onClick={handleClick}>Click</button>
        <input onChange={handleChange} type="text" />
        <button onClick={register}>register</button>
    </div>
  )
}
