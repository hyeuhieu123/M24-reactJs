import React, { Component } from 'react'

interface Product{
  id: number,
  name: string,
  price: number,
  quantity: number
}
interface Iproduct{
  products: Product[];
}
export default class ProductSon extends Component <Iproduct>{
  constructor(props: any) {
    super(props);
  }
  render() {
    const {products} = this.props;
    // console.log(products);
    
    return (
      <>
        {products.map((item) =>{
          return(
          <ul key={item.id}>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.quantity}</li>
          </ul>
        )})}
      </>
    )
  }
}
