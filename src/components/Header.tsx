import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Search from './Search'
import { isAuthenticate } from "../utils/localStorage"
import { toast } from 'react-toastify'
type Props = {
    search: (keyword: string) => void
}

const Header = (props: Props) => {
    const navigate = useNavigate()
    const logOut = () => {
        localStorage.removeItem('user');
        toast.success("Đã đăng xuất");
        setTimeout(() => {
            navigate('/signin')
        }, 1000);
    }
    return (
        <>
            <div>
                <div className="header-top flex justify-between h-[80px] w-[1200px] m-auto">
                    <figure className="logo pt-4">
                        <NavLink to="/">
                            <img src="https://rafcart.rslahmed.com/assets/images/svg/logo.svg" width="150px" />
                        </NavLink>
                    </figure>
                    <div>
                        <ul className="w-[700px] mt-4 pl-10 mb-[20px] flex ">
                            <li><NavLink to="/" className="px-[20px] no-underline color-black text-black   " >Homepage</NavLink></li>
                            <li><NavLink to="/products" className="px-[20px] no-underline color-black text-black" >Product</NavLink></li>
                            <li><NavLink to="/blog" className="px-[20px] no-underline color-black text-black" >Blog</NavLink></li>
                            <li><NavLink to="/" className="px-[20px] no-underline color-black text-black" >Phone</NavLink></li>

                        </ul>
                    </div>
                    <div className="flex mt-4 text-center checksn">
                        {isAuthenticate() ?
                            <div>
                                {isAuthenticate().user.role == 1 ?
                                    <div className="dropdown flex ">
                                        <button className="dropbtn"><i className="fas fa-user-circle fa-2x" /><p>{isAuthenticate().user.name}</p></button>
                                        <div className="dropdown-content">
                                            <NavLink to="/admin">Admin</NavLink>
                                            <NavLink to="#" onClick={() => logOut()}>Đăng xuất</NavLink>
                                        </div>
                                    </div>
                                    : <div className="dropdown duration-300">
                                        <button className="dropbtn"><i className="fas fa-user-circle fa-2x" /><p>{isAuthenticate().user.name}</p></button>
                                        <div className="dropdown-content">
                                            <NavLink to="#" onClick={() => logOut()}>Đăng xuất</NavLink>
                                        </div>
                                    </div>

                                }
                            </div>
                            : <div className="signin pl-5 ">
                                <ul className="flex">
                                    <span className="sm:ml-3">
                                        <NavLink to="/signup" className="no-underline">
                                            <button type="button" className=" inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[red] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sing up </button>
                                        </NavLink>
                                    </span>
                                    <span className="sm:ml-3 ">
                                        <NavLink to="/signin" className="no-underline">
                                            <button type="button" className=" inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sing in</button>
                                        </NavLink>
                                    </span>
                                </ul>
                            </div>

                        }

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
                    <Search onSearch={props.search} />
                    <div className="flex mt-4 text-center ">
                        <div className="signin pl-5">
                            <ul className="flex">
                                <NavLink to="/cart" className="no-underline">   <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[blue] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Gio Hàng </button></NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>




        </>

    )
}

export default Header