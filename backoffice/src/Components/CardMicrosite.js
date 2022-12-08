import React from "react";

export default function CardMicrosite(props) {
  return (
    <div className="card text-center shadow bg-body rounded h-18rem mb-4 cursor-pointer" onClick={(valeu) => console.log(valeu.target)}>
      <div className="card-body p-5 m-4 ">
        <h5 className={changeColorTitulo()}>{props.titulo}</h5>
        <p className="card-text text-center">
          <small className="text-muted">{props.subTitulo}</small>
        </p>
      </div>
    </div>
  );

  function changeColorTitulo() {
    if(!props.color)
      return "card-title fs-5 text-center"
    return "card-title fs-5 text-center " + props.color;
  }
}
