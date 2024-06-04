import React from 'react'

interface Props{
    product: Product
}
interface Product{
    id: number,
    name: string,
    price: number,
    quantity: number
}
export default function Product(a: Props) {
    const {product} = a
    const {id, name, price, quantity} = product;
  return (
    <>
        <ul>
            <li>ID: {id}</li>
            <li>Tên: {name}</li>
            <li>Giá: {price}</li>
            <li>Số lượng: {quantity}</li>
        </ul>
    </>
  )
}
