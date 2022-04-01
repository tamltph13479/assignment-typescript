import React from 'react'
import { CategoryType } from '../types/category';

type Props = {
    categorys: CategoryType[];
}

const Advise = ({ categorys }: Props) => {
    return (
        <>
            <div className="border-solid border-2 border[#f3f3f3]">


                {categorys?.map((category, index) => {
                    console.log(category)
                    return (
                        <>
                            <li className="px-[40px]  hover:bg-[#f3f3f3] list-none "><a href="#" className="no-underline ">{category.name} </a></li>
                            <hr />
                        </>
                    )
                })}




            </div>



        </>
    )
}

export default Advise