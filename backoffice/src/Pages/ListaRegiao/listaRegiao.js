import React from "react";

import Dropdown from "../../Components/Dropdown";

export default function ListaRegiao() {
  const tipos = ["Todas", "A", "B", "C"]

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-end">
          <div className="col-4 col-md-2">
            <Dropdown tipos={tipos} onChange={(value) => console.log(value)} />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            
          </div>
        </div>


      </div>
      {/* <div className="row">
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
                  <Pagina />
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div> */}
    </>
  );
}
