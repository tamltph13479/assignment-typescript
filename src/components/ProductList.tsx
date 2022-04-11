import React from 'react'
import { NavLink } from 'react-router-dom';
import { ProductType } from '../types/Product';

type ProductListProps = {
    products: ProductType[];
    onAddToCart: (cart: any) => void;
}
const ProductList = (props: ProductListProps) => {
    return (

        <article className=" mx-auto w-[1200px] ">



            <div className="conten my-[20px]">
                <h1 className="font-bold text-[20px] py-[20px]">New Arrivals</h1>
                <div className="product grid grid-cols-4 gap-5 ">
                    {props.products?.map((product, index) => {
                        console.log(product)
                        return (
                            // <div className="col-3" key={index}>
                            //     <div className="card" >
                            //         <img src="..." className="card-img-top" alt="..." />
                            //         <div className="card-body">
                            //             <h5 className="card-title">{product.name}</h5>
                            //             <p className="block">{product.price}</p>
                            //             <a href={`/products/${product.id}`} className="btn btn-primary">Chi tiet</a>
                            //         </div>
                            //     </div>
                            // </div>
                            <form action="">
                                <div className=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
                                    <div className=" w-[100%] ">
                                        <NavLink to={`/products/${product._id}`}> <img src={product.img} /></NavLink>
                                    </div>
                                    <div className="py-[10px] px-[10px] leading-8">
                                        <NavLink to={`/products/${product._id}`} className="no-underline">
                                            <h4 className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">{product.name}</h4>
                                        </NavLink>
                                        <p className="text-[15px] text-[red]">{product.price}</p>
                                        <p>130,000,000 lượt xem</p>
                                    </div>
                                    <div className="conten-item ">
                                        <NavLink to=""><button onClick={() => props.onAddToCart(product._id)}>Add to cart</button></NavLink>
                                    </div>
                                </div>
                            </form>

                        )
                    })}




                </div>
            </div>




        </article >

    )
}

export default ProductList