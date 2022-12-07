import React from 'react';

import CartaoPI from '../../Components/Cards/Card_pi';
import CartaoAT from '../../Components/Cards/Card_at';
import CartaoDetais from '../../Components/Cards/Card_details';
import AddCard from '../../Components/Cards/AddCard';
import CartaoPIRemove from '../../Components/Cards/Card_piRemove';
import MiniCard from '../../Components/Cards/MiniCard';


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


            <div className='row'>

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



            <div className='row'>
                <div className='col-3' >

                    <AddCard
                        title="Adicionar Ponto de Interesse"
                    />

                </div>

                <div className='col-3 p-0'>

                    <CartaoPIRemove
                        title="Nome do Local Turístico"
                        subTitle="Categoria"
                        morada="Morada"
                        txtLink="Remover"
                    />
                </div>
            </div>



            <div className='row'>
                <div className='col-2' >
                    <MiniCard
                        title="Nome do Restaurante"
                    />
                </div>
            </div>

            <div className='row'>


                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">

                                <div className='row'>
                                    <div className='col-2'>
                                        <MiniCard
                                            title="Nome do Restaurante" />
                                    </div>

                                    <div className='col-2'>
                                        <MiniCard
                                            title="Nome do Restaurante" />
                                    </div>

                                    <div className='col-2'>
                                        <MiniCard
                                            title="Nome do Restaurante" />
                                    </div>

                                    <div className='col-2'>
                                        <MiniCard
                                            title="Nome do Restaurante" />
                                    </div>

                                    <div className='col-2'>
                                        <MiniCard
                                            title="Nome do Restaurante" />
                                    </div>

                                    <div className='col-2'>
                                        <MiniCard
                                            title="Nome do Restaurante" />
                                    </div>
                                </div>


                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                <button type="button" class="btn btn-primary">Validar</button>
                            </div>
                        </div>
                    </div>
                </div>





            </div>

        </>


    );
}