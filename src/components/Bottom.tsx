import React from 'react'

type Props = {}

const Bottom = (props: Props) => {
    return (
        <>
            <div>
                <div className=" w-[1200px] m-auto grid grid-cols-4 pt-10 pb-10 gap-[20px] ">
                    <div className="w-[320px] px-[20px] ">
                        <div>
                            <img src="https://rafcart.rslahmed.com/assets/images/svg/logo.svg" />
                        </div>
                        <p className="py-[10px] leading-5">Lorem ipsum, or it is sometimes kno wn, is dummy text used in laying out print</p>
                        <div>
                            <div className="footer_newslet">
                                <h6 className="font-bold py-[10px]">NEWSLETTER</h6>
                                <form className="footernews_form">
                                    <input type="text" placeholder="Your email address" className="py-[10px] rounded-lg bg-none" />
                                    <a href="#">
                                        <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sing in</button>
                                    </a>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="intro px-[20px]">
                        <div>

                            <h4 className="font-bold leading-8 ">MY ACCOUNT</h4>
                        </div>
                        <div className="pt-[10px] leading-8">
                            <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">Orders</a></p>
                            <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">Wishlist</a></p>
                            <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">Track Order</a></p>
                            <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">Manage Account</a></p>
                            <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">Return Order</a></p>
                        </div>
                    </div>
                    <div className="intro px-[20px]">
                        <div>

                            <h4 className="font-bold leading-8 ">INFORMATION</h4>
                        </div>
                        <div className="pt-[10px] leading-8">
                            <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">About Us</a></p>
                            <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">Return Policy</a></p>
                            <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">Terms &amp; condition</a></p>
                            <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">Privacy Policy</a></p>
                            <p><a href="" className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">
                                FAQ</a></p>
                        </div>
                    </div>
                    <div className="intro px-[20px]">
                        <div>
                            <h4 className="font-bold leading-8 ">CONTACT</h4>
                        </div>
                        <div className="pt-[10px] leading-8">
                            <p>Tòa nhà FPT Polytechnic, P. Trịnh Văn Bô, Xuân Phương, Nam Từ Liêm, Hà Nội</p>
                            <p>Phone :+566 477 256, +566 254 575</p>
                            <p>Email : Thetam1998@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="py-3 bg-[#2b2d42] text-center text-xs text-[#ffffff]">
                    <p>© RAFCART - All Rights Reserved</p>
                </div>
            </div>


        </>
    )
}

export default Bottom