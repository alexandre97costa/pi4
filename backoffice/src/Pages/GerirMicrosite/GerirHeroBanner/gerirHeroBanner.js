import React from 'react';
import TituloMicrosite from "../../../Components/TituloMicrosite";
import SubTituloMicrosite from "../../../Components/SubTituloMicrosite";
import BotaoMicrosite from "../../../Components/BotaoMicrosite";
import UrlImagemMicrosite from "../../../Components/UrlImagemMicrosite";
import BotaoGuardar from '../../../Components/BotaoGuardar';

export default function GerirHeroBanner(){
    return (
        <div className="container">
          <div className="row">
            <div className="col-10">
              <p className="fs-3 mb-5 ms-4">Hero Banner</p>
    
              <div className="card p-3 mb-5 ms-4 shadow bg-body rounded">
                <TituloMicrosite
                titulo="Título"/>
                <SubTituloMicrosite 
                subTitulo="Subtítulo"/>
                <BotaoMicrosite 
                botao="Texto Botão"/>
                <UrlImagemMicrosite 
                urlImagem="Url da imagem"/>
                <BotaoGuardar
                botaoGuardar="Guardar"
                />
              </div>
            </div>
          </div>
        </div>
    );
    
    
}