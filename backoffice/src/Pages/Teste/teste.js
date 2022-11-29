import React from 'react';

import CartaoPI from '../../Components/Card_pi';
import CartaoAT from '../../Components/Card_at';

export default function Teste() {
    return (
        <>
    

            <div className='row'>
                <div className='col-3 px-2'>
                    <CartaoPI
                        title="Nome do Local Turístico" 
                        subTitle="Categoria"
                        morada="Morada"
                        txtLink="Ver mais detalhes"
                    />
                </div>

                <div className='col-3 px-2'>
                    <CartaoPI
                        title="Nome do Local Turístico" 
                        subTitle="Categoria"
                        morada="Morada"
                        txtLink="Ver mais detalhes"
                    />
                </div>

                <div className='col-3 px-2'>
                    <CartaoPI
                        title="Nome do Local Turístico" 
                        subTitle="Categoria"
                        morada="Morada"
                        txtLink="Ver mais detalhes"
                    />
                </div>

                <div className='col-3 px-2'>
                    <CartaoPI
                        title="Nome do Local Turístico" 
                        subTitle="Categoria"
                        morada="Morada"
                        txtLink="Ver mais detalhes"
                    />
                </div>
            </div>


            <div className='row'>
                <div className='col-3 px-2'>
                    <CartaoAT
                        title="Nome do Agente Turístico" 
                        subTitle="Categoria"                     
                        txtLink="Ver mais detalhes"
                    />
                </div>

                <div className='col-3 px-2'>
                    <CartaoAT
                        title="Nome do Agente Turístico" 
                        subTitle="Categoria"
                        txtLink="Ver mais detalhes"
                    />
                </div>

                <div className='col-3 px-2'>
                    <CartaoAT
                        title="Nome do Agente Turístico" 
                        subTitle="Categoria"
                        txtLink="Ver mais detalhes"
                    />
                </div>

                <div className='col-3 px-2'>
                    <CartaoAT
                        title="Nome do Agente Turístico" 
                        subTitle="Categoria"
                        txtLink="Ver mais detalhes"
                    />
                </div>
            </div>




            
        </>

        
    );
}