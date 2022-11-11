import React from 'react';

export default function Main() {
    return (
        <>

            <div className='row border mb-3'>
                <div className='col-md-6 border'>teste1</div>
                <div className='col-md-6 border'>teste2</div>
            </div>
            <div className='row mb-3'>
                <div className='col-12 border py-3'>
                    <button className='btn btn-primary me-3'>
                        Primary
                    </button>
                    <button className='btn btn-outline-primary me-3'>
                        Outline Primary
                    </button>
                    <button className='btn btn-dark me-3'>
                        Secondary
                    </button>
                    <button className='btn btn-outline-dark me-3'>
                        Outline Secondary
                    </button>
                </div>
            </div>
            <div className='row bg-danger vh-100 border mb-3'>
                teste à sidebar com conteúdo muito comprido
            </div>
        </>
    );
}