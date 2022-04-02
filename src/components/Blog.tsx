import React from 'react'
import { NavLink } from 'react-router-dom';
import { PostType } from '../types/Post';

type PostTystProps = {
    posts: PostType[];
}
const Blog = ({ posts }: PostTystProps) => {
    return (
        <div className="conten my-[20px] container" >
            <h1 className="font-bold text-[20px] py-[20px]">Recomended For You</h1>
            <div className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto py-8 sm:py-10 lg:max-w-none">
                        <div className="container  mx-auto max-w-7x1">
                            <div className="flex flex-wrap -m-4">

                                {posts?.map((post, index) => {
                                    console.log(post)
                                    return (
                                        // <div className="col-3" key={index}>
                                        //     <div className="card" >
                                        //         <img src="..." className="card-img-top" alt="..." />
                                        //         <div className="card-body">
                                        //             <h5 className="card-title">{product.name}</h5>
                                        //             <p className="block">{product.price}</p>
                                        //             <a href={`/products/${product.id}`} className="btn btn-primary">Chi tiet</a>
                                        //         </div>
                                        //     </div>
                                        // </div>
                                        <div className="xl:w-1/3 md:w-1/2 p-4 overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer" key={index}>
                                            <div className="bg-white p-6 rounded-lg">
                                                <NavLink to={`/blog/${post._id}`}>   <img className="no-underline lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src={post.img} /></NavLink>
                                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">   {post.title}</h3>
                                                <NavLink className="no-underline" to={`/blog/${post._id}`}> <h2 className=" text-lg text-gray-900 font-medium title-font mb-4">{post.content}</h2></NavLink>
                                                <p className="leading-relaxed text-base">dfsdfsdf</p>
                                            </div>
                                        </div>

                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog