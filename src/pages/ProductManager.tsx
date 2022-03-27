import React from 'react'
import { ProductType } from '../types/Product'

type ProductManagerProps = {
    products: ProductType[];
    onRemove: (id: number) => void
}

const ProductManager = ({ products, onRemove }: ProductManagerProps) => {
    return (
        <>
            <h2 className="my-4 text-center">Quan Ly san pham</h2>
            <table className="container table table-bordered table-striped">

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ten san Pham</th>
                        <th>Gia</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((product, index) => {
                        console.log(product)
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td><img src={product.img} alt="" /></td>
                                <td>{product.price}</td>
                                <td><button onClick={() => onRemove(product.id)} className="btn btn-danger">Remove</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ProductManager