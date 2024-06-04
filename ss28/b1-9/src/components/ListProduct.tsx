import React, { Component } from 'react'
import ProductSon from './ProductSon';

interface Product{
    id: number,
    name: string,
    price: number,
    quantity: number
}
export default class ListProduct extends Component {
    public state: { products: Product[] };
    constructor(props: any) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    name: 'Iphone 12',
                    price: 24000000,
                    quantity: 10
                },
                {
                    id: 2,
                    name: 'Iphone 11',
                    price: 15600000,
                    quantity: 20
                }
            ]
        }
    }
  render() {
    return (
      <>
        <ProductSon products={this.state.products}></ProductSon>
      </>
    )
  }
}
