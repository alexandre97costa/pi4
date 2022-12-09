import React from "react";
import { Dropdown } from "../../Components/Dropdown_";
import { Lista } from "../../Components/Lista";
import { LinhaDaRegiao } from "../../Components/LinhaDaRegiao_";
import { Pagina } from "../../Components/Pagina";

export default function ListaRegiao(props) {
  return (
    <>
      <div className="row justify-content-end">
        <Dropdown
          nomeBotao="Filtro 1"
          nome1="filtro1"
          nome2="filtro2"
          nome3="filtro3"
        />
        <Dropdown
          nomeBotao="Filtro 2"
          nome1="filtro1"
          nome2="filtro2"
          nome3="filtro3"
        />
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card p-3 mb-5 shadow bg-body rouded border-0 mt-2">
            <div className="row p-3">
              <div className="col-12">
                <div className="row">
                  <Lista nomeA="# Responsável Região " nomeB="# Região" nomeC="Ações" />
                  <LinhaDaRegiao
                    nomeResponsavel="02 José António Gomes"
                    nomeRegiao="224 Tondela"
                  />
                  <LinhaDaRegiao
                    nomeResponsavel="11 Luisa Machado Castro"
                    nomeRegiao="224 Armamar"
                  />
                  <LinhaDaRegiao
                    nomeResponsavel="21 Rodrigo Miguel"
                    nomeRegiao="224 Lamego"
                  />
                  <LinhaDaRegiao
                    nomeResponsavel="31 Amália Rodrigues Silva"
                    nomeRegiao="224 Cinfães"
                  />
                  <LinhaDaRegiao
                    nomeResponsavel="36 Dinis Martins"
                    nomeRegiao="224 Mangualde"
                  />
                  <LinhaDaRegiao
                    nomeResponsavel="22 Priscila Lopes"
                    nomeRegiao="224 Nelas"
                  />
                  <LinhaDaRegiao
                    nomeResponsavel="25 Mateus Almeida"
                    nomeRegiao="224 Viseu"
                  />
                  <LinhaDaRegiao
                    nomeResponsavel="09 Sara Martins Campos"
                    nomeRegiao="224 Resende"
                  />
                  <LinhaDaRegiao
                    nomeResponsavel="07 João Pedro Pereira"
                    nomeRegiao="224 Satão"
                  />
                  <Pagina/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
