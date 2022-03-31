import React from 'react'
import { Outlet } from 'react-router-dom'
import Headeradmin from '../../components/AdminPase/Headeradmin'
import Navadin from '../../components/AdminPase/Navadin'

type Props = {}

const AdminLayout = (props: Props) => {
    return (

        <div className="flex h-screen bg-gray-50 dark:bg-gray-900" >

            <Navadin />
            <div className="flex flex-col flex-1 w-full">
                <Headeradmin />

                <main className="h-full overflow-y-auto">
                    <div className="container px-6 mx-auto grid">
                        <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
                            <Outlet />
                        </h2>
                    </div>
                </main>
            </div>
        </div>

    )
}

export default AdminLayout