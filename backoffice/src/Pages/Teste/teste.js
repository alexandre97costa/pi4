import React from 'react';

import CartaoPI from '../../Components/Cards/Card_pi';
import CartaoAT from '../../Components/Cards/Card_at';
import CartaoDetais from '../../Components/Cards/Card_details';
import AddCard from '../../Components/Cards/AddCard';
import CartaoPIRemove from '../../Components/Cards/Card_piRemove';
import Topbar from '../../Components/Topbar.jsx';
//import Sidebar from '../../Components/Sidebar.jsx';
//import Dashboard from '../../Components/Dashboard.jsx';

export default function Teste() {
    return (
        <>
               
               <div className='row col-3'>
                    <CartaoPI
                        title="Nome do Local Turístico" 
                        subTitle="Categoria"
                        morada="Morada"
                        txtLink="Ver mais detalhes"
                    />
                </div>


            <div className='row col-3'>
                    <CartaoAT
                        title="Nome do Agente Turístico" 
                        subTitle="Categoria"                     
                        txtLink="Ver mais detalhes"
                    />
            </div>


            <div className='row col-12'>     
                    <CartaoDetais
                        Nome="Nome" 
                        NomeDesc="Um nome qql"     
                        
                        Descricao="Descrição" 
                        DescricaoDesc="Uma categoria qql"     

                        Contacto="Contacto" 
                        ContactoDesc="987452136"
                        
                        Email="Email" 
                        EmailDesc="ahdhd@email.pt"   
                    />              
            </div>

            <div className='row col-3'>
                    <AddCard
                        title="Adicionar Ponto de Interesse" 
                    />
            </div>


            <div className='row col-3'>
                    <CartaoPIRemove
                        title="Nome do Local Turístico" 
                        subTitle="Categoria"
                        morada="Morada"
                        txtLink="Remover"
                    />
            </div>






            
        </>

        
    );
}