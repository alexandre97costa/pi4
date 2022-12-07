import React from "react";
import { Dropdown } from "../../Components/Dropdown";
import { Lista } from "../../Components/Lista";
import { Linhadalista } from "../../Components/Linhadalista";
import { Pagina } from "../../Components/Pagina";

export default function ListaAgenteTuristico(props) {
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
                  <Lista nomeA="# Nome" nomeB="Categoria" nomeC="Ações" />
                  <Linhadalista
                    nomepessoa="02 José António Gomes"
                    nomeCard="Agente Turístico"
                    color="bg-agente"
                  />
                  <Linhadalista
                    nomepessoa="11 Luisa Machado Castro"
                    nomeCard="Agente Turístico"
                    color="bg-agente"
                  />
                  <Linhadalista
                    nomepessoa="21 Rodrigo Miguel"
                    nomeCard="Agente Turístico"
                    color="bg-agente"
                  />
                  <Linhadalista
                    nomepessoa="31 Amália Rodrigues Silva"
                    nomeCard="Agente Turístico"
                    color="bg-agente"
                  />
                  <Linhadalista
                    nomepessoa="36 Dinis Martins"
                    nomeCard="Agente Turístico"
                    color="bg-agente"
                  />
                  <Linhadalista
                    nomepessoa="22 Priscila Lopes"
                    nomeCard="Agente Turístico"
                    color="bg-agente"
                  />
                  <Linhadalista
                    nomepessoa="25 Mateus Almeida"
                    nomeCard="Agente Turístico"
                    color="bg-agente"
                  />
                  <Linhadalista
                    nomepessoa="09 Sara Martins Campos"
                    nomeCard="Agente Turístico"
                    color="bg-agente"
                  />
                  <Linhadalista
                    nomepessoa="07 João Pedro Pereira"
                    nomeCard="Agente Turístico"
                    color="bg-agente"
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
