import React from 'react'
import { NavLink } from 'react-router-dom'
import { currencyPrice } from '../utils/formatMoney'


type Props = {
    onIncreaseItemInCart: (id: number) => void
    onDecreaseItemInCart: (id: number) => void
    onRemoveCart: (id: number) => void
}

const CartPage = (props: Props) => {
    let cart: any = [];
    cart = JSON.parse(localStorage.getItem('cart') as string);
    let total = 0
    return (
        < article className=" mx-auto w-[1200px] " >
            <div className="flex justify-center my-6">
                <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
                    <div className="flex-1">
                        <table className="w-full text-sm lg:text-base">

                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        STT
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Avatar
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Price
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Quantity
                                    </th>
                                    <th className="px-6 py-3 text-right text-center">
                                        Action
                                    </th>
                                    <th className="px-6 py-3 text-right">
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {cart && cart.map((item: any, index: number) => {
                                    return <tr key={index}>
                                        <td className="px-6 py-3 max-w-[30px] w-[30px] text-center font-semibold">
                                            {index + 1}
                                        </td>
                                        <td className="px-6 py-3 text-left">
                                            <img src={item.img} className="w-20" />
                                        </td>
                                        <td className="px-6 py-3 text-left">
                                            <NavLink to={`/products/${item._id}`} className="no-underline">
                                                {item.name}
                                            </NavLink>

                                        </td>
                                        <td className='text-red-600 font-bold text-center'>{currencyPrice(`${item.price * item.quantity}`)} <u>đ</u></td>
                                        <td className="px-6 py-3 text-left">
                                            <button onClick={() => props.onIncreaseItemInCart(item._id)} className="btn increase border border-black p-2">+</button>
                                            <span className='px-2'>{item.quantity}</span>
                                            <button onClick={() => props.onDecreaseItemInCart(item._id)} className="btn decrease border border-black p-2">-</button>
                                        </td>
                                        <td className="px-6 py-3 text-right">
                                            <button onClick={() => props.onRemoveCart(item._id)} className="btn remove border font-normal text-[12px] uppercase hover:bg-gray-600 hover:text-white duration-300 border-gray-400 rounded px-5 py-1">Remove</button>
                                        </td>
                                        <td hidden>{total += item.price * item.quantity}</td>
                                    </tr>
                                })}
                            </tbody>

                        </table>

                        <div className="my-4 mt-6 -mx-2 lg:flex">

                            <div className="lg:px-2 lg:w-1/2">
                                <div className="p-4 bg-gray-100 rounded-full">
                                    <h1 className="ml-2 font-bold uppercase">Order Details</h1>
                                </div>
                                <div className="p-4">
                                    <p className="mb-6 italic">Shipping and additionnal costs are calculated based on values you have entered</p>
                                    <div className="flex justify-between border-b">
                                        <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                            Tong Tien
                                        </div>
                                        <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                                            ${total}
                                        </div>
                                    </div>

                                    <a href="#" className="no-underline">
                                        <button className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
                                            <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z" /></svg>
                                            <span className="ml-2 mt-5px">Procceed to checkout</span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article >

    )
}

export default CartPage


