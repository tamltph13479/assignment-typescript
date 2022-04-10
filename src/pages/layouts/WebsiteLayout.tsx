import React from 'react'
import { Outlet } from 'react-router-dom'
import Bottom from '../../components/Bottom'
import Header from '../../components/Header'




type Props = {
    searchProduct: (keyword: string) => void
}

const WebsiteLayout = (props: Props) => {
    return (
        <div className="">
            <Header search={props.searchProduct} />

            <Outlet />
            <Bottom />

        </div>
    )
}

export default WebsiteLayout