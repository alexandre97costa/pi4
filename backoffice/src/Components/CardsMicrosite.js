import React from "react";

export default function CardsMicrosite(props) {
  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col-12">
        <div className="card-body rounded-3 shadow p-5 m-4 ">
          <h5 className="card-title text-center">{props.titulo}</h5>
          <p className="card-text text-center">
            <small className="text-muted">{props.subTitulo}</small>
          </p>
        </div>
      </div>
    </div>
    </div>
    
  );
}
