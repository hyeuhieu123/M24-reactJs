import React, { useState } from 'react'

export default function UseSate() {
    let cart = [
        {
            name: "ip",
            price: 5000,
            quantity: 1
        },
        {
            name: "ip",
            price: 5000,
            quantity: 2
        },
        {
            name: "ip",
            price: 5000,
            quantity: 3
        },
    ]
    const[price,setPrice]=React.useState<number>(()=>{
        return cart.reduce((currentValue,item)=>{
            return currentValue + item.price * item.quantity
        },0)
    })
    // cú pháp của destructoring
    const [name, setName] = useState<string>("")
    const [count, setCount] = useState<number>(0)
    const handleClick = () => {
        setCount(count + 1);
    }
    // sử dung bacth update
    return (
        <div>UseSate
            {/* 
            userSate trạng thái của dữ liệu
            khi dữ liệu thay đổi thì giao diện nó thay đổi theo 
            các hook là các phương thức đc react cung cấp nên phải import nó vô để sử dụng
            bản chất useSate là 1 func trả về mảng có 2 phần tử 
            -initial của useSate 
                + truyền trực tiếp giá trị
                +
        */}
            <p>giá trịcủa count:{count}</p>
            <button onClick={handleClick}>tăng</button>
            <p>giá trị của {price}</p>
        </div>
    )
}

