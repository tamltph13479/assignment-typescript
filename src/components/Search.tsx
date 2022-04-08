import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { SearchProductByName } from '../api/products';

type Props = {}
type FromInput = {
    q: string

}
const Search = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FromInput>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FromInput> = async data => {
        const { data: keyword } = await SearchProductByName(data.q)
        console.log(keyword);
        navigate("/search")
    }
    return (
        <form action="/search" className="w-[700px] mt-4 pl-10 flex " onSubmit={handleSubmit(onSubmit)}>
            <input type="text" className="h-10 w-10/12 pl-3 rounded-sm" placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm" {...register('q')} name="q" />
            <div>
                <button className="bg-[#2b2d42] text-[#ffffff] hover:text-[#ff0000] px-[20px] py-[8px] rounded-r-lg">Tìm kiếm</button>
            </div>
        </form>
    )
}

export default Search


