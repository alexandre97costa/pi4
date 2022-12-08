import React from 'react';
import RedesSociaisMicrosite from "../../../Components/RedesSociaisMicrosite"
import PrivacidadeCookiesMicrosite from "../../../Components/PrivacidadeCookiesMicrosite"
import Botao from '../../../Components/Botao';

export default function GerirEditarFooter(){
    return (
        <div className="container">
          <div className="row">
            <div className="col-10">
              <p className="fs-3 mb-5 ms-4">Gerir Footer</p>


              <p className="fs-3 mb-5 ms-4">Editar Redes Sociais</p>
              <div className="card p-3 mb-5 shadow bg-body rounded">
                <RedesSociaisMicrosite
                iconUrl="Url do Icon Facebook"
                iconUrlPlaceholder="Inserir o URL"
                linkRedeSocialTexto="Link para o facebook"
                linkRedeSocialTextoPlaceholder="Inserir o link"
                />
                <RedesSociaisMicrosite
                iconUrl="Url do Icon Instagram"
                iconUrlPlaceholder="Inserir o URL"
                linkRedeSocialTexto="Link para o instragam"
                linkRedeSocialTextoPlaceholder="Inserir o link"
                />
                <RedesSociaisMicrosite
                iconUrl="Url do Icon Twitter"
                iconUrlPlaceholder="Inserir o URL"
                linkRedeSocialTexto="Link para o Twitter"
                linkRedeSocialTextoPlaceholder="Inserir o link"
                />
                <Botao
                Botao="Guardar"
                />
              </div>


              <p className="fs-3 mb-5 ms-4">Editar Política de Privacidade e Cookies</p>
              <div className="card p-3 mb-5 shadow bg-body rounded">
                <PrivacidadeCookiesMicrosite
                linkTexto="Link para a página de Política de Privacidade"
                linkTextoPlaceholder="Inserir o URL"
                />
                <PrivacidadeCookiesMicrosite
                linkTexto="Link para a página de Política de Cookies"
                linkTextoPlaceholder="Inserir o link"
                />
                <Botao
                Botao="Guardar"
                />
              </div>
            </div>
          </div>
        </div>
    );
}