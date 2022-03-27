import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../../components/Banner'
import Bottom from '../../components/Bottom'
import Header from '../../components/Header'




type Props = {}

const WebsiteLayout = (props: Props) => {
    return (
        <div className="">
            <Header />

            <Outlet />
            <Bottom />

        </div>
    )
}

export default WebsiteLayout