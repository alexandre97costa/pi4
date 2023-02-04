import React, { useEffect, useState } from "react";
import axios from "axios";
import CardPontoInteresse from "../../Components/Cards/CardPontoInteresse";
import CardAdd from "../../Components/Cards/CardAdd";
import auth from "../../Auth/auth.service";

//imagem exemplo
//import jardimMaes from "../../Assets/Images/jardimMaes.jpg";

const ip = process.env.REACT_APP_IP;

export default function PontoInteresse(props) {
  const [pontosInteresse, setPontoInteresse] = useState([]);

  useEffect(() => {
    axiosGetPontosInteresse();
  }, []);


  function tipoUtilizador() {
    if (props.tipoUtilizador === "Agente Turistico")
      return (
        <div className="col-6 col-md-3">
          <CardAdd
            title="Adicionar Ponto de Interesse"
            idModal="AddPontoInteresse"
            nomeModal="newPontoInteresse"
          />
        </div>
      );
  }

  function axiosGetPontosInteresse() {
    const url = ip + "/pi"
    console.log(url)
    //Aqui que fazemos o pedido axios dos pontos de interesse
    axios
      .get(url, auth.header())
      .then((output) => {
        console.log(output.data);
        setPontoInteresse(output.data?.data ?? []);
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      <div className="row pt-5">
        {tipoUtilizador()}

        {pontosInteresse.map((item, index) => {
          return (
            <div key={index} className="col-12 col-md-3">
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
      </div>
    </>
  );
}
