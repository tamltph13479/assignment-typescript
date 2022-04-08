import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { read } from '../api/products';
import { ProductType } from '../types/Product';


type Props = {

}

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

        <article className=" mx-auto w-[1200px] ">
            <div className="mx-auto w-[1200px] my-10">
                <div className="grid grid-cols-2 mb-3">
                    <h2 className="font-bold text-xl ">{product?.name}</h2>
                    <div className="mt-2 flex justify-end">
                        <a href="" className="mt-1">
                            <ul className="flex ">
                                <li>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                                    </svg>
                                </li>
                                <li>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                                    </svg>
                                </li>
                                <li>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                                    </svg>
                                </li>
                                <li>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                                    </svg>
                                </li>
                                <li>
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z" />
                                    </svg>
                                </li>
                            </ul>
                        </a>
                        <a href="" className="ml-2 text-sky-600 hover:underline relative hover:font-semibold">13 đánh giá</a>
                        <a href="" className="ml-1 text-sky-600 hover:underline relative hover:font-semibold">| 4110 Hỏi &amp; đáp</a>
                    </div>
                </div>
                <hr />
                <div className="grid grid-cols-2 mt-7">
                    <div className="mr-3">
                        <div className="border-[1px]">
                            <a href="">
                                <img src={product?.img} width="100%" height="" />
                            </a>
                        </div>
                        <div className="flex flex-row justify-center">
                            <a href="" className="mt-3 text-center hover:font-bold">
                                <img className="phone-color" src="https://images.fpt.shop/unsafe/fit-in/40x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673217820889289_iphone-13-pro-max-vang-1.jpg" />
                                <p className="ml-3">Vàng</p>
                            </a>
                            <a href="" className="mt-3 text-center hover:font-bold ml-3">
                                <img className="phone-color " src="https://images.fpt.shop/unsafe/fit-in/40x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673217826201634_iphone-13-pro-max-xanh-1.jpg" />
                                <p className="ml-3">Xanh</p>
                            </a>
                            <a href="" className="mt-3 text-center hover:font-bold ml-3">
                                <img className="phone-color" src="https://images.fpt.shop/unsafe/fit-in/40x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673217819795830_iphone-13-pro-max-xam-1.jpg" />
                                <p className="ml-3">Xám</p>
                            </a>
                            <a href="" className="mt-3 text-center hover:font-bold ml-3">
                                <img className="phone-color" src="https://images.fpt.shop/unsafe/fit-in/40x40/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673217819171028_iphone-13-pro-max-bac-1.jpg" />
                                <p className="ml-3">Bạc</p>
                            </a>
                        </div>
                        <div className="flex mt-3 justify-center">
                            <div className="flex mr-2">
                                <i className="fas fa-award text-red-700  mr-2" />
                                <p className="text-sm">Hàng chính hãng - bảo hành 12 Tháng</p>
                            </div>
                            <div className="flex">
                                <i className="fas fa-shipping-fast text-red-700  mr-2" />
                                <p className="text-sm">Giao hàng toàn quốc</p>
                            </div>
                        </div>
                    </div>
                    <div className="detail">
                        <div className="flex ">
                            <span className="text-red-700 font-semibold text-2xl mr-5 mt-2">{product?.price}</span>
                            <span className="font-semibold text-lg line-through mt-3">30.990.000₫</span>
                            <span className="ml-52">Trả góp chỉ từ 3.000.500₫/tháng</span>
                        </div>
                        <div className="mt-2 bg-slate-100 grid grid-cols-4 rounded-md">
                            <label className="radio">
                                <input type="radio" className="form-radio" name="GB" />
                                <span className="ml-1 font-bold">128GB</span>
                                <span className="block">30.990.000₫</span>
                            </label>
                            <label className="radio">
                                <input type="radio" className="form-radio" name="GB" />
                                <span className="ml-1 font-bold">256GB</span>
                                <span className="block">33.490.000₫</span>
                            </label>
                            <label className="radio">
                                <input type="radio" className="form-radio" name="GB" />
                                <span className="ml-1 font-bold">512GB</span>
                                <span className="block">40.990.000₫</span>
                            </label>
                            <label className="radio">
                                <input type="radio" className="form-radio" name="GB" />
                                <span className="ml-1 font-bold">1TB</span>
                                <span className="block">45.990.000₫</span>
                            </label>
                        </div>
                        <div className="box-Promo">
                            <div className="endow py-[20px]">
                                <span className="bg-[#e9ecef] px-3 font-bold">Ưu đãi thêm</span>
                            </div>
                            <ul className="content-promo">
                                <li className="inline-flex">
                                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2" />
                                    <div>
                                        <span>
                                            Tặng gói iCloud 50GB miễn phí 3 tháng
                                        </span>
                                        <a href="" className="text-blue-600 hover:underline">Xem chi tiết</a>
                                    </div>
                                </li>
                                <li className="inline-flex">
                                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2" />
                                    <div>
                                        <span>
                                            Giảm sốc 50% cho gói bảo hành vàng chỉ từ 550.000đ
                                        </span>
                                        <a href="" className="text-blue-600 hover:underline">Xem chi tiết</a>
                                    </div>
                                </li>
                                <li className="inline-flex">
                                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2" />
                                    <div>
                                        <span>
                                            Thu cũ đổi mới trợ giá 15%
                                        </span>
                                        <a href="" className="text-blue-600 hover:underline">Xem chi tiết</a>
                                    </div>
                                </li>
                                <li className="inline-flex">
                                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2" />
                                    <div>
                                        <span>
                                            Bảo hành 2 năm chính hãng
                                        </span>
                                        <a href="" className="text-blue-600 hover:underline">Xem chi tiết</a>
                                    </div>
                                </li>
                                <li className="inline-flex">
                                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2" />
                                    <div>
                                        <span>
                                            Tặng PMH 200.000đ mua Sạc Magsafe
                                        </span>
                                        <a href="" className="text-blue-600 hover:underline">Xem chi tiết</a>
                                    </div>
                                </li>
                                <li className="inline-flex">
                                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2" />
                                    <div>
                                        <span>
                                            Tặng PMH 300.000đ mua Ốp lưng chính hãng
                                        </span>
                                        <a href="" className="text-blue-600 hover:underline">Xem chi tiết</a>
                                    </div>
                                </li>
                                <li className="inline-flex">
                                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2" />
                                    <div>
                                        <span>
                                            Cơ hội trúng 22 Hổ Vàng trị giá 6 triệu
                                        </span>
                                        <a href="" className="text-blue-600 hover:underline">Xem chi tiết</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="btn-buy ">
                            <button className="w-full bg-red-700 mt-4 rounded-md text-white hover:bg-red-800" id="btnAddToCart">
                                <div>
                                    <strong>MUA NGAY</strong>
                                </div>
                                <p className="text-sm">Giao hàng miễn phí hoặc nhận tại shop</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <h1 className="uppercase text-[16px] font-bold border-b-[1px] mt-2 pl-1"> Thông tin chi tiết sản phẩm </h1>
                <p className="text-[14px] leading-[1.8] mb-3"> {product?.desc}
                </p>
            </div>
            <div className="conten my-[20px]">
                <h1 className="font-bold text-[20px] py-[20px]">New Arrivals</h1>
                <div className="product grid grid-cols-4 gap-5 ">
                    <form action="">
                        <div className=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
                            <div className=" w-[100%] ">
                                <a href="#"> <img src="https://vnn-imgs-f.vgcloud.vn/2019/08/07/23/apple-tiep-tuc-thong-tri-thi-truong-may-tinh-bang.jpg" /></a>
                            </div>
                            <div className="py-[10px] px-[10px] leading-8">
                                <a href="#" className="no-underline">
                                    <h4 className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">HP Pavilion 15</h4>
                                </a>
                                <p className="text-[15px] text-[red]">$450.000000</p>
                                <p>130,000,000 lượt xem</p>
                            </div>
                            <div className="conten-item ">
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </form>
                    <form action="">
                        <div className=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
                            <div className=" w-[66%]  m-auto ">
                                <a href="#"> <img src="https://image.made-in-china.com/202f0j00KZUiGpwMLhos/M9-Plus-7-0inch-12g-512g-24MP-Cheap-Smart-Phones-4G-Mobile-Android-Cell-Phones-Lowest-Price-Mobail-Phone.webp" height="100px" /></a>
                            </div>
                            <div className="py-[10px] px-[10px] leading-8">
                                <a href="#" className="no-underline">
                                    <h4 className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">HP Pavilion 15</h4>
                                </a>
                                <p className="text-[15px] text-[red]">$450.000000</p>
                                <p>130,000,000 lượt xem</p>
                            </div>
                            <div className="conten-item ">
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </form>
                    <form action="">
                        <div className=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
                            <div className=" w-[100%] ">
                                <a href="#"> <img src="https://vnn-imgs-f.vgcloud.vn/2019/08/07/23/apple-tiep-tuc-thong-tri-thi-truong-may-tinh-bang.jpg" /></a>
                            </div>
                            <div className="py-[10px] px-[10px] leading-8">
                                <a href="#" className="no-underline">
                                    <h4 className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">HP Pavilion 15</h4>
                                </a>
                                <p className="text-[15px] text-[red]">$450.000000</p>
                                <p>130,000,000 lượt xem</p>
                            </div>
                            <div className="conten-item ">
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </form>
                    <form action="">
                        <div className=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
                            <div className=" w-[100%] ">
                                <a href="#"> <img src="https://vnn-imgs-f.vgcloud.vn/2019/08/07/23/apple-tiep-tuc-thong-tri-thi-truong-may-tinh-bang.jpg" /></a>
                            </div>
                            <div className="py-[10px] px-[10px] leading-8">
                                <a href="#" className="no-underline">
                                    <h4 className="no-underline text-blue-600 visited:text-purple-600 hover:text-red-500">HP Pavilion 15</h4>
                                </a>
                                <p className="text-[15px] text-[red]">$450.000000</p>
                                <p>130,000,000 lượt xem</p>
                            </div>
                            <div className="conten-item ">
                                <button>Add to cart</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </article>

    )
}

export default ProductsDetail