import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ProductType } from '../../../types/Product'

type ProducAddProps = {

    onAdd: (product: ProductType) => void
}
type FromInput = {
    name: string,
    price: number,
    img: string,

}

const ProducAdd = (props: ProducAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FromInput>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FromInput> = data => {
        props.onAdd(data)
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
                                        Them San Pham
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
                                        <a href="/admin/products" className="no-underline" >
                                            <button type="button" className=" inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                Quay lai
                                            </button>
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col my-[20px]">
                                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">

                                            <div className="container mt-2">

                                                <form className="w-[800px] ml-[20px]" onSubmit={handleSubmit(onSubmit)}>
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
                                                            <textarea id="details" rows={3} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-[20px]" />
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

export default ProducAdd