import Product from "./Product"

export default function ProductContainer() {
    const product = {
        id: 1,
        name: 'Samsung Galaxy S7',
        price: 10,
        quantity: 10
    }
    return (
    <>
        <Product product={product}></Product>
    </>
  )
}
