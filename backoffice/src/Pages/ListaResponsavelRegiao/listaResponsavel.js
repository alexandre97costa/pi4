import React from "react";
import { Dropdown } from "../../Components/Dropdown";
import { Lista } from "../../Components/Lista";
import { LinhaDaLista } from "../../Components/LinhaDaLista";
import Pagina from "../../Components/Pagina";

export default function ListaResponsavelRegiao(props) {
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
                  <LinhaDaLista
                    nomepessoa="02 José António Gomes"
                    nomeCard="Responsável Região"
                    color="bg-responsavel"
                  />
                  <LinhaDaLista
                    nomepessoa="11 Luisa Machado Castro"
                    nomeCard="Responsável Região"
                    color="bg-responsavel"
                  />
                  <LinhaDaLista
                    nomepessoa="21 Rodrigo Miguel"
                    nomeCard="Responsável Região"
                    color="bg-responsavel"
                  />
                  <LinhaDaLista
                    nomepessoa="31 Amália Rodrigues Silva"
                    nomeCard="Responsável Região"
                    color="bg-responsavel"
                  />
                  <LinhaDaLista
                    nomepessoa="36 Dinis Martins"
                    nomeCard="Responsável Região"
                    color="bg-responsavel"
                  />
                  <LinhaDaLista
                    nomepessoa="22 Priscila Lopes"
                    nomeCard="Responsável Região"
                    color="bg-responsavel"
                  />
                  <LinhaDaLista
                    nomepessoa="25 Mateus Almeida"
                    nomeCard="Responsável Região"
                    color="bg-responsavel"
                  />
                  <LinhaDaLista
                    nomepessoa="09 Sara Martins Campos"
                    nomeCard="Responsável Região"
                    color="bg-responsavel"
                  />
                  <LinhaDaLista
                    nomepessoa="07 João Pedro Pereira"
                    nomeCard="Responsável Região"
                    color="bg-responsavel"
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
