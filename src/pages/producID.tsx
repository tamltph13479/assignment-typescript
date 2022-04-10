import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { readCategoryID } from '../api/category';
import { ProductType } from '../types/Product';


type Props = {

}

const ProducID = (props: Props) => {
    const [product, setProduct] = useState<ProductType[]>([]);
    const { id } = useParams()
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await readCategoryID(id)
            setProduct(data.products)

        }
        getProduct();

    }, [])
    return (
        <>


            <article className=" mx-auto w-[1200px] ">



                <div className="conten my-[20px]">
                    <h1 className="font-bold text-[20px] py-[20px]">New Arrivals</h1>
                    <div className="product grid grid-cols-4 gap-5 ">
                        {product?.map((product, index) => {
                            console.log(product)
                            return (
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
                                            <button>Add to cart</button>
                                        </div>
                                    </div>
                                </form>

                            )
                        })}




                    </div>
                </div>




            </article >





        </>
    )
}

export default ProducID