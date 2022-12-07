import React, { useEffect, useState } from 'react'
import dev from '../Auth/dev';

import { Sidebar } from '../Components/sidebar'
import User from '../Components/user'


export default function Page({title, icon, children}) {

    useEffect(() => { 
        dev.log("✅ Pagina()") 
    }, [])

    return (

        
        <div className='container-fluid position-relative'>
            <div className='row'>
                <Sidebar/>

                {/* Content */}
                          
                <div className='col-10 bg-light overflow-auto' style={{ maxHeight: '100vh' }}>          
                    
                    <div className='container-fluid py-3'>
                        <div className='row mb-4'>
                            <div className='display-6'>
                                <i className={'me-3 bi bi-'+icon}></i>
                                {title}
                            </div>
                        </div>
                        {children}
                    </div>
                </div>

                <User/>
            </div>
        </div>
    )
}