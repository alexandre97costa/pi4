import React, { useEffect, useState } from "react";
import axios from "axios";
import auth from "../../Auth/auth.service";
import VisibleTo from "../../Helpers/VisibleTo";

import CardPontoInteresse from "../../Components/Cards/CardPontoInteresse";
import CardAdd from "../../Components/Cards/CardAdd";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ip = process.env.REACT_APP_IP;

export default function PontoInteresse(props) {
	const [pontosInteresse, setPontoInteresse] = useState([]);

	useEffect(() => {
		axiosGetPontosInteresse();
	}, []);

	async function axiosGetPontosInteresse() {
		const url = ip + '/pi'
		const options = {
			...auth.header(),
			params: (+auth.getUser().id === 2) ?
				{ agente_turistico_id: auth.getUser().id } :
				{}
		}

		await axios
			.get(url, options)
			.then(output => {
				setPontoInteresse(output.data?.data ?? []);
			})
			.catch(error => {
				toast.warning(error.response.data.msg)
				console.error(error)
			});
	}

	return (
		<>
			<div className="row pt-5 gy-5">

				<VisibleTo tipo="2">
					<div className="col-6 col-md-3">
						<CardAdd
							title="Adicionar Ponto de Interesse"
							idModal="AddPontoInteresse"
							nomeModal="newPontoInteresse"
						/>
					</div>
				</VisibleTo>

				{pontosInteresse.map((item, index) => {
					return (
						<div key={index} className="col-12 col-xs-12 col-sm-6 col-md-4 col-lg-3 d-flex">

							<CardPontoInteresse
								id_ponto_interesse={item.id}
								imagem={item.imagens[0].url}
								nome={item.nome}
								categoria={item.tipo_interesse.nome}
								morada={item.morada}
								numeroScans={item.count_scans}
								//numeroComentarios={item.tipo_interesse.observacoes}
								numeroFavoritos={item.avg_avaliacao}
							//numeroCheck={item.validado}
							/>
						</div>
					);
				})}
				<ToastContainer />
			</div>
		</>
	);
}
