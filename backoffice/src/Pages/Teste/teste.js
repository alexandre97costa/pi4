import React from 'react';

import CartaoPI from '../../Components/Card_pi';
import CartaoAT from '../../Components/Card_at';
import CartaoDetais from '../../Components/Card_details';

export default function Teste() {
    return (
        <>
    

            <div className='row'>
               

                <div className='col-3'>
                    <CartaoPI
                        title="Nome do Local Turístico" 
                        subTitle="Categoria"
                        morada="Morada"
                        txtLink="Ver mais detalhes"
                    />
                </div>
            </div>


            <div className='row'>
                <div className='col-3'>
                    <CartaoAT
                        title="Nome do Agente Turístico" 
                        subTitle="Categoria"                     
                        txtLink="Ver mais detalhes"
                    />
                </div>
            </div>


            <div className='row'>       
                    <CartaoDetais
                        title="??" 
                        subTitle="Categoria"     
                        
                        title2="??" 
                        subTitle2="Categoria"     

                        title3="??" 
                        subTitle3="Categoria"     

                    />              
            </div>




            
        </>

        
    );
}