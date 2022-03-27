import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ProductType } from '../types/Product'
import { Navigate, useNavigate } from 'react-router-dom'
type ProducAddProps = {
    onAdd: (product: ProductType) => void
}
type FromInput = {
    name: string,
    price: number,
    img: string
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
            <h2 className="text-center">Them san pham</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="form container m-auto">
                <div className="mb-3 ">
                    <label htmlFor="name" className="form-label">Ten san pham</label>
                    <input type="text" className="form-control" id="name" {...register('name')} />
                    <div className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Gia san pham</label>
                    <input type="number" className="form-control" id="price" {...register('price')} />
                    <div className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">anh san pham</label>
                    <input type="text" className="form-control" id="name" {...register('img')} />
                    <div className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <button type="submit" className="btn btn-primary">Them</button>
            </form>

        </>

    )
}

export default ProducAdd