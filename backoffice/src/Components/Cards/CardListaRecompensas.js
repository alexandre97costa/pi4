import axios from 'axios';
import React from 'react'
import auth from "../../Auth/auth.service";

import Botao from '../Botao';
import CardForm from '../CardForm';

const ip = process.env.REACT_APP_IP;

export default function CardListaRecompensas(props) {
    async function axiosDelete(id) {
        const url = ip + "/recompensa/" + id
        console.log(url)

        await axios
            .delete(url, auth.header)
            .then((output) => {
                console.log(output)
            }).catch((error) => console.log(error))
    }

    return (
        <CardForm>
            <p className="card-title fs-5 text-success">{props.nomePontoInteresse}</p>

            {props.recompensas.map((item, index) => {
                return (
                    <div key={index} className="row w-100 align-self-center border-top pt-3 pb-0">
                        <div className='col-5 ps-0'>
                            <p className="text-start text-muted">{item.recompensa.titulo}</p>
                        </div>
                        <div className='col-7 text-end pe-0'>
                            <Botao className="btn-outline-danger btn-sm" texto="Eliminar" onClick={() => axiosDelete(item.id)} />
                        </div>
                    </div>
                )
            })}
        </CardForm>
    );
}