import React from "react";

export default function GerirAdicionarCards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 ">
          <p className="fs-3 mb-5 ms-4">Adicionar Conteúdo</p>

          <div className="card p-3 mb-5 shadow bg-body rounded ms-4">
            <div className="row pt-4 pb-4 justify-content-center">
              <div className="col-10 ">
                <div className="row ">
                  <div className="col-12">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label pb-1"
                    >
                      Título
                    </label>
                  </div>
                  <div className="row">
                    <div className="col-12 pb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label pb-1"
                    >
                      Descrição
                    </label>
                  </div>
                  <div className="row">
                    <div className="col-12 pb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 pb-4">
                      <div className="input-group mb-3">
                        <label
                          className="input-group mb-2"
                          for="inputGroupFile02"
                        >
                          Imagem
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          id="inputGroupFile02"
                        />
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          id="inputGroupFileAddon02"
                        >
                          Carregar
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label pb-1"
                    >
                      Botão Texto
                    </label>
                  </div>
                  <div className="row">
                    <div className="col-12 pb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-4">
                      <button type="button" className="btn btn-primary mt-2">
                        Guardar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
