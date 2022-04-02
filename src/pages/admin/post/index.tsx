import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { PostType } from '../../../types/Post';



type ProductManagerProps = {
    posts: PostType[];
    onRemove: (id: number | string) => void
}

const PostAdmin = (props: ProductManagerProps) => {
    return (
        <>

            <div className="flex h-screen bg-gray-50 dark:bg-gray-900" >
                <div className="flex flex-col flex-1 w-full">
                    <main className="h-full overflow-y-auto">
                        <div className="container px-6 mx-auto grid">
                            <div className="lg:flex lg:items-center lg:justify-between">
                                <div className="flex-1 min-w-0 ">
                                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate mt-[30px] ">
                                        Bài viết
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
                                        <NavLink to="/admin/post/add" className="no-underline" >
                                            <button type="button" className=" inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                Them Moi
                                            </button>
                                        </NavLink>
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col my-[20px]">
                                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">

                                            <div className="container mt-5">
                                                <table className="table table-borderless table-responsive card-1 p-4">
                                                    <thead>
                                                        <tr className="border-bottom">
                                                            <th> <span className="ml-2 text-[20px]">STT</span> </th>

                                                            <th> <span className="ml-2">Name</span> </th>
                                                            <th> <span className="ml-2">img</span> </th>
                                                            <th> <span className="ml-2">Conten</span> </th>


                                                            <th colSpan={2} className=""> <span className="pl-[50px]">Action</span> </th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        {props.posts?.map((post, index) => {
                                                            console.log(post)
                                                            return (
                                                                <tr key={index} className="border-bottom text-[20px]">
                                                                    <td className="">{index + 1}</td>

                                                                    <td> {post.title}   </td>
                                                                    <td><img src={post.img} alt="" width="150px" />   </td>
                                                                    <td> {post.content}   </td>

                                                                    <td colSpan={2} >    <Link to={`/admin/post/${post._id}/edit`} className="btn btn-primary">Update</Link>
                                                                        <button onClick={() => props.onRemove(post._id)} className="btn btn-danger">Remove</button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })}

                                                    </tbody>
                                                </table>

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

export default PostAdmin