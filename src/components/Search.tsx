import React from 'react'

type Props = {}

const Search = (props: Props) => {
    return (
        <form action="/search" className="w-[700px] mt-4 pl-10 flex ">
            <input type="text" className="h-10 w-10/12 pl-3 rounded-sm" placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm" name="keyword" />
            <div>
                <button className="bg-[#2b2d42] text-[#ffffff] hover:text-[#ff0000] px-[20px] py-[8px] rounded-r-lg">Tìm kiếm</button>
            </div>
        </form>
    )
}

export default Search