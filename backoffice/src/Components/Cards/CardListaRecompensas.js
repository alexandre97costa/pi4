import axios from 'axios';
import React from 'react'
import auth from "../../Auth/auth.service";
import VisibleTo from '../../Helpers/VisibleTo';

import Botao from '../Botao';
import CardForm from '../CardForm';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ip = process.env.REACT_APP_IP;

export default function CardListaRecompensas(props) {
    async function axiosRemoveRecompensaPontoInteresse(id) {
        toast.success("Recompensa Eliminada " + id)
    }

    return (
        <CardForm>
            <p className="card-title fs-5 text-success">{props.nomePontoInteresse}</p>
            <ToastContainer />

            {props.recompensas.map((item, index) => {
                return (
                    <div key={index} className="row w-100 align-self-center border-top pt-3 pb-0">
                        <div className='col-5 ps-0'>
                            <p className="text-start text-muted">{item.recompensa.titulo}</p>
                        </div>
                        <VisibleTo tipo="2">
                            <div className='col-7 text-end pe-0'>
                                <Botao className="btn-outline-danger btn-sm" texto="Eliminar" onClick={() => axiosRemoveRecompensaPontoInteresse(item.id)} />
                            </div>
                        </VisibleTo>
                    </div>
                )
            })}
        </CardForm>
    );
}