import React from "react";

export default function Microsite(props) {
  return (
    <div className="card p-3 mb-5 ms-4 shadow bg-body rounded">
      <div className="row pt-4 pb-4 justify-content-center">

        <div className="col-12 ">
          <div className="row">

            <div className="col-12 ">
              <label htmlFor="formGroupExampleInput" className="form-label ms-3">
                {props.titulo}
              </label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-10 pb-4">
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder={props.tituloPlaceholder}
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-outline-warning bi bi-pencil-fill me-md-3"></button>
            <button className=" btn btn-outline-danger bi bi-trash-fill"></button>
          </div>
        </div>

        <div className="col-12">
          <div className="row">

            <div className="col-12">
              <label htmlFor="formGroupExampleInput" className="form-label ms-3">
                {props.subtitulo}
              </label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-10 pb-4">
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder={props.subtituloPlaceholder}
            />
          </div>
          <div className=" col-md-2 ms-auto">
            <button className="btn btn-outline-warning bi bi-pencil-fill me-md-3"></button>
            <button className=" btn btn-outline-danger bi bi-trash-fill"></button>
          </div>
        </div>

        <div className="col-12">
          <div className="row">

            <div className="col-12">
              <label htmlFor="formGroupExampleInput" className="form-label ms-3">
                {props.botaoTexto}
              </label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-10 pb-4">
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder={props.botaoTextoPlaceholder}
            />
          </div>
          <div className=" col-md-2 ms-auto">
            <button className="btn btn-outline-warning bi bi-pencil-fill me-md-3"></button>
            <button className=" btn btn-outline-danger bi bi-trash-fill"></button>
          </div>
        </div>



      </div>
    </div>
  );
}
