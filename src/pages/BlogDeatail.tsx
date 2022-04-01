import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { readPost } from '../api/post';
import { PostType } from '../types/Post';



type Props = {

}

const BlogDetail = (props: Props) => {
    const { id } = useParams();

    const [post, setProduct] = useState<PostType>();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await readPost(id);
            setProduct(data)

        };
        getProduct();
    }, [])
    return (
        <>
            <div className="m-auto container text-center py-[20px] ">

                <h1>{post?.title}</h1>
                <img src={post?.img} width="1000px" className="m-auto " />
                <p>{post?.content}</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863981044334!2d105.74459841476343!3d21.03812778599329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1648751098675!5m2!1svi!2s" width={"100%"} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </>

    )
}

export default BlogDetail