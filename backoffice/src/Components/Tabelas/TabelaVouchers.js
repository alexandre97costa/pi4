import React, { useEffect, useState } from 'react';
import CardForm from '../CardForm';

export default function TabelaVouchers(props) {
    const [recompensa, setRecompensas] = useState([])

    useEffect(() => {
        const recompensa = [{
            nome: "224 Tondela",
            pontoInteresse: "02 José António Gomes",
            dataEmissao: "2022/02/02",
            dataResgate: "2022/03/03",
        }, {
            nome: "224 Tondela",
            pontoInteresse: "02 José António Gomes",
            dataEmissao: "2022/02/02",
            dataResgate: "2022/03/03",
        }, {
            nome: "224 Tondela",
            pontoInteresse: "02 José António Gomes",
            dataEmissao: "2022/02/02",
            dataResgate: "2022/03/03",
        }]

        setRecompensas(recompensa)
    })

    return (
        <CardForm>
            <div className="table-responsive">
                <table className="table text-center align-middle">
                    <thead>
                        <tr>
                            <th className='text-start fw-normal fs-5' scope="col"># Recompensa</th>
                            <th className='fw-normal fs-5' scope="col"># Ponto de Interesse</th>
                            <th className='fw-normal fs-5' scope="col">Data Emissão</th>
                            <th className='fw-normal fs-5' scope="col">Data Resgate</th>
                        </tr>
                    </thead>

                    <tbody className='table-group-divider'>
                        {recompensa.map((item, index) => {
                            return (
                                <tr key={index} className="h-5-5rem">
                                    <td className='text-start w-25'>{item.nome}</td>
                                    <td className='text-center w-25'>{item.pontoInteresse}</td>
                                    <td className='text-center w-25'>{item.dataEmissao}</td>
                                    <td className='text-center w-25'>{item.dataResgate}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </CardForm>
    );
}