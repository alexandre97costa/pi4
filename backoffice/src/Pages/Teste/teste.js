import React from 'react';

import AddCard from '../../Components/Cards/AddCard'
import CardAgenteTuristico from '../../Components/Cards/CardAgenteTuristico'
import CardDetails from '../../Components/Cards/CardDetails'
import MiniCard from '../../Components/Cards/MiniCard'
import CardPontoInteresse from '../../Components/Cards/CardPontoInteresse'
import Botao from '../../Components/Botao'
import CardMicrosite from '../../Components/Microsite/CardMicrosite';
import { FormEditarPass } from '../../Components/FormEditarPass'

export default function Teste() {
    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <FormEditarPass />
                </div>

                <div className='col-3'>
                    <AddCard />
                </div>

                <div className='col-3'>
                    <CardMicrosite 
                    titulo="dasdafadadasdadaddddddddddddddddddddddddddddddddddd"
                    subTitulo="Teste 2" />
                </div>

                <div className='col-1'>
                    <Botao texto="Button1" />
                </div>

                <div className='col-3'>
                    <CardPontoInteresse outline="btn-outline-danger"/>
                </div>

                <div className='col-3'>
                    <CardPontoInteresse outline="btn-outline-primary"/>
                </div>

                <div className='col-3'>
                    <MiniCard title="Jardim das mães"/>
                </div>

                <div className='col-3'>
                    <CardAgenteTuristico 
                        title = "João Sequeira"
                        subTitle = "UM SENHOR AGENTE"
                        txtLink = "Info"
                    />
                </div>

                <div className='col-12'>
                    <CardDetails />
                </div>
            </div>
        </>
    );
}