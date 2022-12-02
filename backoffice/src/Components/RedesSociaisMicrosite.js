import React from "react";

export default function RedesSociaisMicrosite(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 ">
          <div className="row mt-3">
            <div className="col-12 ">
              <label htmlFor="formIconUrlInput" className="form-label mb-2 ">
                {props.iconUrl}
              </label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-10">
            <input
              type="text"
              className="form-control  mb-4"
              id="formIconUrlPlaceholderInput"
              placeholder={props.iconUrlPlaceholder}
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-outline-warning bi bi-pencil-fill me-md-3"></button>
            <button className=" btn btn-outline-danger bi bi-trash-fill"></button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 ">
          <div className="row">
            <div className="col-12 ">
              <label htmlFor="formLinkRedeSocialTextoInput" className="form-label">
                {props.linkRedeSocialTexto}
              </label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-10 pb-4">
            <input
              type="text"
              className="form-control "
              id="formlinkRedeSocialTextoPlaceholderlInput"
              placeholder={props.linkRedeSocialTextoPlaceholder}
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-outline-warning bi bi-pencil-fill me-md-3"></button>
            <button className=" btn btn-outline-danger bi bi-trash-fill"></button>
          </div>
        </div>
      </div>
    </div>
  );
}
