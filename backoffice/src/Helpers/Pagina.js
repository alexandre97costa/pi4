import React, { useEffect } from 'react'
import dev from '../Auth/dev';

import Sidebar from './Sidebar'
import User from './User'

export default function Pagina(props) {
    useEffect(() => { dev.log("✅ Pagina()") }, [])

    return (
        <div className='container-fluid position-relative'>
            <div className='row'>
                <Sidebar/>
                         
                <div className='col-12 col-md-10 bg-light overflow-auto' style={{ maxHeight: '100vh' }}>          
                    
                    <div className='container'>
                        <div className='row'>
                            <div className='display-6 py-4'>
                                {props.title}
                            </div>
                        </div>
                        {props.children}
                    </div>
                </div>

                <User userName={props.userName}/>
            </div>
        </div>
    )
}