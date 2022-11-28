import React from "react";

export default function GerirDescarregarApp() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10">
          <p className="fs-3 mb-5 ms-4">Descarregar App</p>

          <div className="card p-3 mb-5 ms-4 shadow bg-body rounded">
            <div className="row pt-4 pb-4 justify-content-center'">
              <div className="col-10 ms-5 ">

                <div className="row">
                  <div className="col-12">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      Titulo
                    </label>
                  </div>
                  <div className="row">
                    <div className="col-10 ms-auto pb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder=""
                      />
                    </div>
                    <div className="col-md-2 ms-auto">
                      <button className="btn btn-outline-warning bi bi-pencil-fill me-md-3"></button>
                      <button className=" btn btn-outline-danger bi bi-trash-fill"></button>
                    </div>
                  </div>

                  <div className="col-12">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      Subtitulo
                    </label>
                  </div>
                  <div className="row">
                    <div className="col-10 pb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder=""
                      />
                    </div>
                    <div className="col-md-2 ms-auto">
                      <button className="btn btn-outline-warning bi bi-pencil-fill me-md-3"></button>
                      <button className=" btn btn-outline-danger bi bi-trash-fill"></button>
                    </div>
                  </div>

                  <div className="col-12">
                    <label
                      htmlFor="formGroupExampleInput"
                      className="form-label"
                    >
                      Botão Texto
                    </label>
                  </div>
                  <div className="row">
                    <div className="col-10 pb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="Descarregar..."
                      />
                    </div>
                    <div className="col-md-2 ms-auto">
                      <button className="btn btn-outline-warning bi bi-pencil-fill me-md-3"></button>
                      <button className=" btn btn-outline-danger bi bi-trash-fill"></button>
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
    </div>
  );
}
