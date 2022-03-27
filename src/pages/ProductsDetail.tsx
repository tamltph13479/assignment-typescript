import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { read } from '../api/products';
import { ProductType } from '../types/Product';

type Props = {}

const ProductsDetail = (props: Props) => {
    const { id } = useParams();

    const [product, setProduct] = useState<ProductType>();
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            setProduct(data)

        };
        getProduct();
    }, [])
    return (
        <div>
            <h1>{product?.name}</h1>
            <img src={product?.img} alt="" />
            <p>{product?.price}</p>
        </div>
    )
}

export default ProductsDetail