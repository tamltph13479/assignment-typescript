import React from 'react'
import { NavLink } from 'react-router-dom';
import { CategoryType } from '../types/category';

type Props = {
    categorys: CategoryType[];
}

const Advise = ({ categorys }: Props) => {
    return (
        <>
            <div className=" border-top border-start border[#f3f3f3]">


                {categorys?.map((category, index) => {
                    console.log(category)
                    return (
                        <>
                            <button className="w-[200px]">   <li className="px-[40px] py-[5px]  hover:bg-[#f3f3f3] list-none border-bottom"><a href={`/productID/${category._id}`} className="no-underline ">{category.name} </a></li>
                            </button>
                        </>
                    )
                })}




            </div>



        </>
    )
}

export default Advise