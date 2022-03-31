import React from 'react'
import Seach from './Seach'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <div>
                <div className="header-top flex justify-between h-[80px] w-[1200px] m-auto">
                    <figure className="logo pt-4">
                        <a href="/">
                            <img src="https://rafcart.rslahmed.com/assets/images/svg/logo.svg" width="150px" />
                        </a>
                    </figure>
                    <div>
                        <ul className="w-[700px] mt-4 pl-10 mb-[20px] flex ">
                            <li><a className="px-[20px] no-underline color-black text-black   " href="/">Homepage</a></li>
                            <li><a className="px-[20px] no-underline color-black text-black" href="/products">Product</a></li>
                            <li><a className="px-[20px] no-underline color-black text-black" href="/blog">Blog</a></li>
                            <li><a className="px-[20px] no-underline color-black text-black" href="/">Phone</a></li>

                        </ul>
                    </div>
                    <div className="flex mt-4 text-center checksn">
                        <div className="signin pl-5 ">
                            <ul className="flex">
                                <span className="sm:ml-3">
                                    <a href="/signup" className="no-underline">
                                        <button type="button" className=" inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[red] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sing up </button>
                                    </a>
                                </span>
                                <span className="sm:ml-3 ">
                                    <a href="/signin" className="no-underline">
                                        <button type="button" className=" inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sing in</button>
                                    </a>
                                </span>
                            </ul>
                        </div>
                    </div>
                </div >
                <div className="bg-[#fd3d57]">
                    <div className="header-top bg-[#fd3d57] flex justify-between h-[80px] w-[1200px] m-auto">
                        <div className="nav pt-4">
                            <div>
                                <button className="bg-[#2b2d42] text-[#ffffff] hover:text-[#ff0000] px-[20px] py-[8px] ">All categories</button>
                            </div>
                        </div>
                        <form action="/search" className="w-[700px] mt-4 pl-10 flex ">
                            <input type="text" className="h-10 w-10/12 pl-3 rounded-sm" placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm" name="keyword" />
                            <div>
                                <button className="bg-[#2b2d42] text-[#ffffff] hover:text-[#ff0000] px-[20px] py-[8px] rounded-r-lg">Tìm kiếm</button>
                            </div>
                        </form>
                        <div className="flex mt-4 text-center ">
                            <div className="signin pl-5">
                                <ul className="flex">
                                    <a href="/#//cart" className="no-underline">   <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[blue] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Gio Hàng </button></a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div >



        </>

    )
}

export default Header