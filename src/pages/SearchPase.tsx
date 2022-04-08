import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { read } from '../api/products';
import { ProductType } from '../types/Product';




type ProductAddProps = {
    onUpdate: (product: ProductType) => void
}
type FormInputs = {
    name: string,
    price: number,
    img: string,
    desc: string,
    category: string
}

const SearchPase = (props: ProductAddProps) => {

    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data)
        }
        getProduct();
    }, [id])



    return (
        <>
            <div className="flex h-screen bg-gray-50 dark:bg-gray-900" >
                <div className="flex flex-col flex-1 w-full">
                    <main className="h-full overflow-y-auto">
                        <div className="container px-6 mx-auto grid">
                            <div className="lg:flex lg:items-center lg:justify-between">

                            </div>
                            <div className="flex flex-col my-[20px]">
                                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">

                                            <div className="container mt-2">

                                                <form className="w-[800px] ml-[20px]">
                                                    <div className="col-span-6 sm:col-span-4 py-[30px]">
                                                        <label className="block text-sm font-medium text-gray-700">Name</label>
                                                        <input type="text" className="form-control" id="name" {...register('name')} />
                                                    </div>
                                                    <div className="col-span-6 sm:col-span-4 pb-[30px]">
                                                        <label className="block text-sm font-medium text-gray-700">Price</label>
                                                        <input type="number" className="form-control" id="price" {...register('price')} />
                                                    </div>
                                                    <div className="col-span-6 sm:col-span-4 pb-[30px]">
                                                        <label className="block text-sm font-medium text-gray-700">Image</label>
                                                        <input type="text" className="form-control" id="img" {...register('img')} />
                                                    </div>
                                                    <div className="col-span-6 sm:col-span-4 pb-[30px]">
                                                        <label className="block text-sm font-medium text-gray-700">Details</label>
                                                        <div className="mb-6">
                                                            <textarea id="details" {...register('desc')} rows={3} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-[20px]" />
                                                        </div>

                                                    </div>

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

export default SearchPase