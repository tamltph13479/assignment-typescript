import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { read } from '../../../api/products';
import { CategoryType } from '../../../types/category';
import { ProductType } from '../../../types/Product';



type ProductAddProps = {
    categorys: CategoryType[];
    onUpdate: (product: ProductType) => void
}
type FormInputs = {
    name: string,
    price: number,
    img: string,
    desc: string,
    category: string
}

const ProductEdit = (props: ProductAddProps) => {

    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
    const navigate = useNavigate();
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data)
        }
        getProduct();
    }, [id])


    const onSumbit: SubmitHandler<FormInputs> = (data) => {
        props.onUpdate(data);
        navigate("/admin/products")
    }
    return (
        <>
            <div className="flex h-screen bg-gray-50 dark:bg-gray-900" >
                <div className="flex flex-col flex-1 w-full">
                    <main className="h-full overflow-y-auto">
                        <div className="container px-6 mx-auto grid">
                            <div className="lg:flex lg:items-center lg:justify-between">
                                <div className="flex-1 min-w-0 ">
                                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate mt-[30px] ">
                                        Sửa San Pham
                                    </h2>
                                    <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                                        <div className="mt-2 flex items-center text-sm text-gray-500">
                                            <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" x-description="Heroicon name: solid/calendar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                            </svg>
                                            Closing on January 9, 2020
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 flex lg:mt-0 lg:ml-4">
                                    <span className="sm:ml-3">
                                        <NavLink to="/admin/products" className="no-underline" >
                                            <button type="button" className=" inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                Quay lai
                                            </button>
                                        </NavLink>
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col my-[20px]">
                                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">

                                            <div className="container mt-2">

                                                <form className="w-[800px] ml-[20px]" onSubmit={handleSubmit(onSumbit)}>
                                                    <div className="col-span-6 sm:col-span-4 py-[30px]">
                                                        <label className="block text-sm font-medium text-gray-700">Name</label>
                                                        <input type="text" className="form-control" id="name" {...register('name', { required: true })} />

                                                        {errors.name && <p className="text-[15px] text-red-500">Bắt buộc phải nhập trường này!</p>}
                                                    </div>
                                                    <div className="col-span-6 sm:col-span-4 pb-[30px]">
                                                        <label className="block text-sm font-medium text-gray-700">Price</label>
                                                        <input type="number" className="form-control" id="name" {...register('price', { required: true })} />

                                                        {errors.price && <p className="text-[15px] text-red-500">Bắt buộc phải nhập trường này!</p>}
                                                    </div>
                                                    <div className="col-span-6 sm:col-span-4 pb-[30px]">
                                                        <label className="block text-sm font-medium text-gray-700">Image</label>
                                                        <input type="text" className="form-control" id="name" {...register('img', { required: true })} />

                                                        {errors.img && <p className="text-[15px] text-red-500">Bắt buộc phải nhập trường này!</p>}
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-4 pb-[30px]">
                                                        <label className="block text-sm font-medium text-gray-700">Details</label>
                                                        <div className="mb-6">
                                                            <textarea id="details" {...register('desc', { required: true })} rows={3} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-[20px]" />
                                                            {errors.desc && <p className="text-[15px] text-red-500">Bắt buộc phải nhập trường này!</p>}
                                                        </div>

                                                    </div>
                                                    <select className="form-select" aria-label="Default select example" {...register('category')}>
                                                        <option selected>Danh Muc</option>
                                                        {props.categorys?.map((item, index) =>


                                                            <option value={item._id}>{item.name}</option>
                                                        )}
                                                    </select>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700">
                                                            Cover photo
                                                        </label>
                                                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                            <div className="space-y-1 text-center">
                                                                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                                <div className="flex text-sm text-gray-600">
                                                                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">

                                                                        <input type="file" className="form-control" id="name" />
                                                                    </label>

                                                                </div>
                                                                <p className="text-xs text-gray-500">
                                                                    PNG, JPG, GIF up to 10MB
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <button type="submit" className="btn btn-primary ml-[20px] my-[30px]">Submit</button>
                                                </form>

                                            </div>



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div >
            </div >

        </>
    )
}

export default ProductEdit