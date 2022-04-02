import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { signup } from '../api/auth'


type FormInputs = {
    name: string,
    email: string,
    password: string | number
}

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormInputs> = async (user) => {
        const { data } = await signup(user);
        if (data) {
            toast.success("Bạn đã đăng ký thành công, chờ 3s");
            setTimeout(() => {
                navigate('/signin')
            }, 3000)
        }
    }

    return (
        <>
            <div className="container mx-auto">
                <div className="flex justify-center px-6 my-12">
                    {/* Row */}
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        {/* Col */}
                        <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg" style={{ backgroundImage: 'url("https://thongtinz.com/wp-content/uploads/2020/08/hinh-nen-phong-canh-1.jpg")' }} />
                        {/* Col */}
                        <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <NavLink to="/signin">
                                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    <span className="inline-block ml-1">Back</span>
                                </button>
                            </NavLink>
                            <h3 className="pt-4 text-2xl text-center">Create an Account</h3>
                            <form method="Post" action="" className="mt-10" id="formSignup" onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="username">
                                        Username
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required placeholder="User name" id="username" {...register('name')} />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="username">
                                        Email
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="form.email" type="email" required placeholder="Email" id="email-address" {...register('email')} />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="password">
                                        Password
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" v-model="form.password" type="password" placeholder="Password" required autoComplete="current-password" id="password" {...register('password')} />
                                </div>
                                <div className="mt-7">
                                    <button type="submit" className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                        sign up
                                    </button>
                                </div>
                                <div className="flex mt-7 items-center text-center">
                                    <hr className="border-gray-300 border-1 w-full rounded-md" />
                                    <label className="block font-medium text-sm text-gray-600 w-full">
                                        Accede con
                                    </label>
                                    <hr className="border-gray-300 border-1 w-full rounded-md" />
                                </div>
                                <div className="flex mt-7 justify-center w-full">
                                    <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                        Facebook
                                    </button>
                                    <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                        Google
                                    </button>
                                </div>
                                <div className="mt-7">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



        </>

    )
}

export default Signup