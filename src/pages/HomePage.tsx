import React from 'react'
import Banner from '../components/Banner'
import ProductList from '../components/ProductList';
import { ProductType } from '../types/Product'

type HomePageProps = {
    products: ProductType[];
}

const HomePage = (props: HomePageProps) => {
    return (
        <div>
            {/* <Banner /> */}
            <ProductList products={props.products} />
        </div>
    )
}

export default HomePage