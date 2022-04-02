import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { readPost } from '../../../api/post'
import { PostType } from '../../../types/Post'


type ProducAddProps = {

    onUpdate: (posts: PostType) => void
}
type FromInput = {
    title: string,
    content: string,
    img: string

}

const PostEdit = (props: ProducAddProps) => {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FromInput>();
    const navigate = useNavigate();
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await readPost(id);
            reset(data)
        }
        getProduct();
    }, [id])


    const onSumbit: SubmitHandler<FromInput> = (data) => {
        props.onUpdate(data);
        navigate("/admin/post")
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
                                        Sửa bai viet
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
                                                        <label className="block text-sm font-medium text-gray-700">Titlte</label>
                                                        <input type="text" className="form-control" id="name" {...register('title')} />
                                                    </div>
                                                    <div className="col-span-6 sm:col-span-4 py-[30px]">
                                                        <label className="block text-sm font-medium text-gray-700">img</label>
                                                        <input type="text" className="form-control" id="name" {...register('img')} />
                                                    </div>
                                                    <div className="col-span-6 sm:col-span-4 py-[30px]">
                                                        <label className="block text-sm font-medium text-gray-700">Conten</label>
                                                        <input type="text" className="form-control" id="name" {...register('content')} />
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

export default PostEdit