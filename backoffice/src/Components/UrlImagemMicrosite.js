import React from "react";

export default function UrlImagemMicrosite(props) {
  return (
    
      <div className="row pb-4 justify-content-center">
        <div className="col-12 ">

          <div className="row">
            <div className="col-12 ">
              <label htmlFor="formUrlImagemMicrositeInput" className="form-label ms-3">
                {props.urlImagem}
              </label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-10">
            <input
              type="text"
              className="form-control"
              id="formUrlImagemMicrositeInput"
              placeholder={props.urlImagemPlaceholder}
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-outline-warning bi bi-pencil-fill me-md-3"></button>
            <button className=" btn btn-outline-danger bi bi-trash-fill"></button>
          </div>
        </div>

      </div>

  );
}
