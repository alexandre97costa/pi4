import React from "react";

export default function CardsMicrosite(props) {
  return (
    <div className="col mb-4">
      <div className="card h-100 text-center shadow bg-body rounded">
        <div className="card-body p-5 m-4 ">
          <h5 className={changeColorTitulo(props)}>{props.titulo}</h5>
          <p className="card-text text-center">
            <small className="text-muted">{props.subTitulo}</small>
          </p>
        </div>
      </div>
    </div>
  );
  function changeColorTitulo(props) {
    return "card-title fs-2 text-center " + props.color;
  }
}
