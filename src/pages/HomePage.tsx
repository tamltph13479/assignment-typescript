import React from 'react'
import Advise from '../components/Advise';
import Banner from '../components/Banner';
import Blog from '../components/Blog';
import ProductList from '../components/ProductList';
import { CategoryType } from '../types/category';
import { PostType } from '../types/Post';


import { ProductType } from '../types/Product'

type HomePageProps = {
    products: ProductType[];
    posts: PostType[],
    categorys: CategoryType[],

}

const HomePage = (props: HomePageProps) => {
    return (
        <div>

            <article className=" mx-auto w-[1200px] ">
                <div className="flex">
                    <div className="grid w-[200px] h-[100%]">
                        < Advise categorys={props.categorys} />
                    </div>
                    <div className="banner bg-[white] w-[1000px] scroll-mb-[10px]">
                        <Banner />
                    </div>
                </div>
                <div className="mx-[10px] grid grid-cols-3 gap-6 overflow-hidden relative  my-[20px]">
                    <div className="grid grid-cols-2 border-solid border-2 border-[#ec5959] rounded-lg  py-[10px] ">
                        <div>
                            <img src="https://rafcart.rslahmed.com/assets/images/svg/delivery-van.svg" className="m-auto" />
                        </div>
                        <div>
                            <h5 className="font-bold">Free shipping</h5>
                            <p className="text-xs">Orders over $200</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 border-solid border-2 border-[#ec5959] rounded-lg  py-[10px]">
                        <div>
                            <img src="https://rafcart.rslahmed.com/assets/images/svg/money-back.svg" className="m-auto" />
                        </div>
                        <div>
                            <h5 className="font-bold">Money Returns</h5>
                            <p className="text-xs">30 Days money return</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 border-solid border-2 border-[#ec5959] rounded-lg  py-[10px]">
                        <div>
                            <img src="https://rafcart.rslahmed.com/assets/images/svg/service-hours.svg" className="m-auto" />
                        </div>
                        <div>
                            <h5 className="font-bold">24/7 Support</h5>
                            <p className="text-xs">Customer support</p>
                        </div>
                    </div>
                </div>
                <ProductList products={props.products} />
                <div className="conten my-[20px]">
                    <h1 className="font-bold text-[20px] py-[20px]">New Arrivals</h1>
                    <div>
                        <div className="banner2 my-[30px]">
                            <img src="https://rafcart.rslahmed.com/assets/images/offer-3.jpg" />
                        </div>
                    </div>
                </div>
                <Blog posts={props.posts} />

                <div className="bg-[#f3f3f3] grid grid-cols-2 gap-5 my-[20px] ">
                    <div className="img-1">
                        <img src="https://rafcart.rslahmed.com/assets/images/mobile-view.png" className="w-[50%] m-auto" />
                    </div>
                    <div className="conten2 py-[10%] ">
                        <h1 className="font-bold text-[30px] text-center">Download RAFCART App Now!</h1>
                        <p className="py-[10px]">Shopping fastly and easily more with our app. Get a link to download the app on your phone</p>
                        <form action="" className="w-[700px] flex ">
                            <input type="text" className="h-10 w-8/12 pl-3 rounded-sm" placeholder="Email Address" />
                            <div>
                                <button className="bg-[red] text-[#ffffff] hover:text-[#ff0000] px-[20px] py-[8px] rounded-r-lg">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </article >
        </div>

    )
}

export default HomePage