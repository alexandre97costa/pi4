import React from "react";
import { Link } from "react-router-dom";

export default function CardMicrosite(props) {
  return (
    <Link to={props.path} className="card text-decoration-none text-dark text-center shadow bg-body rounded h-100 cursor-pointer border-0" onClick={() => console.log(props.titulo)}>
      <div className="card-body p-5 m-4">
        <h5 className={changeColorTitulo()}>{props.titulo}</h5>
        <p className="card-text text-center">
          <small className="text-muted">{props.subTitulo}</small>
        </p>
      </div>
    </Link>
  );

  function changeColorTitulo() {
    if (!props.color)
      return "card-title fs-5 text-center"
    return "card-title fs-5 text-center " + props.color;
  }
}
