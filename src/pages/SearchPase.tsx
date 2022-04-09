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
            <h2>Le the tam</h2>

        </>
    )
}

export default SearchPase