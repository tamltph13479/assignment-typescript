import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const AdminLayout = (props: Props) => {
    return (
        <div>
            <div className="row">
                <div className="col-2">
                    <aside>

                    </aside>

                </div>
                <div>
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    )
}

export default AdminLayout