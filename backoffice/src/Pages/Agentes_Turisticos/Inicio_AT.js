import React from 'react';

import CardPontoInteresse from '../../Components/Cards/CardPontoInteresse';
import CardAgenteTuristico from '../../Components/Cards/CardAgenteTuristico';
import CardDetails from '../../Components/Cards/CardDetails';
import AddCard from '../../Components/Cards/AddCard';

export default function InicioAT() {
    return (
        <>

            <div className='row col-3'>
                <CardPontoInteresse
                    title="Nome do Local Turístico"
                    subTitle="Categoria"
                    morada="Morada"
                    txtLink="Ver mais detalhes"
                    outline="btn-outline-primary"
                />
            </div>


            <div className='row col-3'>
                <CardAgenteTuristico
                    title="Nome do Agente Turístico"
                    subTitle="Categoria"
                    txtLink="Ver mais detalhes"
                />
            </div>


            <div className='row'>

                <CardDetails
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



            <div className='row'>

                <AddCard
                    title="Adicionar Ponto de Interesse"
                />
            </div>

            <div className='col-3 p-0'>

                <CardPontoInteresse
                    title="Nome do Local Turístico"
                    subTitle="Categoria"
                    morada="Morada"
                    txtLink="Remover"
                    outline="btn-outline-danger"
                />

            </div>

        </>


    );
}