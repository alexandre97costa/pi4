import React from "react";
import TituloMicrosite from "../../../Components/TituloMicrosite";
import SubTituloMicrosite from "../../../Components/SubTituloMicrosite";
import InputMicrosite from "../../../Components/InputMicrosite";
import UrlImagemMicrosite from "../../../Components/UrlImagemMicrosite";
import Botao from "../../../Components/Botao";

export default function GerirVantagensApp(props) {
  return (
    <div className="container">

      <div className="row">
        <div className="col-10">
          <p className="fs-3 mb-5 ms-4">Vantagens Aplicação</p>

          <div className="card p-3 mb-5 ms-4 shadow bg-body rounded">
            <TituloMicrosite titulo="Título" />
            <SubTituloMicrosite subTitulo="Subtítulo" />
            <Botao onClick={test}
            Botao="Guardar"
            />
          </div>

          <p className="fs-3 mb-5 ms-4">Card1</p>
          <div className="card p-3 mb-5 ms-4 shadow bg-body rounded">
            <TituloMicrosite titulo="Título" />
            <SubTituloMicrosite subTitulo="Subtítulo" />
            <InputMicrosite botao="Texto Botão" />
            <UrlImagemMicrosite urlImagem="Link para o icon"/>
            <Botao
            Botao="Guardar"
            />
          </div>

          <p className="fs-3 mb-5 ms-4">Descarregar App</p>
          <div className="card p-3 mb-5 ms-4 shadow bg-body rounded">
            <TituloMicrosite titulo="Título" />
            <SubTituloMicrosite subTitulo="Subtítulo" />
            <InputMicrosite botao="Texto Botão" />
            <UrlImagemMicrosite urlImagem="Link para o icon"/>
            <Botao
            Botao="Guardar"
            />
          </div>

          <p className="fs-3 mb-5 ms-4">Descarregar App</p>
          <div className="card p-3 mb-5 ms-4 shadow bg-body rounded">
            <TituloMicrosite titulo="Título" />
            <SubTituloMicrosite subTitulo="Subtítulo" />
            <InputMicrosite botao="Texto Botão" />
            <UrlImagemMicrosite urlImagem="Link para o icon"/>
            <Botao
            Botao="Guardar"
            />
          </div>

        </div>
      </div>
    </div>
  );
  
  function test (){
    alert("Guardado")

  }
}
