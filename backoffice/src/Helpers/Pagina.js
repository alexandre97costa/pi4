import React, { useEffect } from 'react'
import dev from '../Auth/dev';

import { Sidebar } from '../Components/sidebar'
import User from '../Components/user'

export default function Pagina(props) {
    useEffect(() => { dev.log("✅ Pagina()") }, [])

    return (
        <div className='container-fluid position-relative'>
            <div className='row'>
                <Sidebar
                    userType={props.userType}
                    menu={props.menu}
                    selected={props.selected}
                />

                {/* Content */}
                <div className='col-10 bg-light overflow-auto' style={{ maxHeight: '100vh' }}>
                    <div className='container-fluid py-3'>
                        <div className='row mb-4'>
                            <div className='display-6'>
                                {props.title}
                            </div>
                        </div>
                        {props.children}
                    </div>
                </div>

                <User />
            </div>
        </div>
    )
}