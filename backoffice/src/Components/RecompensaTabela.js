import React from "react";

export function RecompensaTabela(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">

            <div ul className="list-group">
              <div li className="list-group-item d-flex justify-content-between align-items-center"> {props.nomePI}
                <button className= "btn btn-Light "> + Criar recompensa</button>
              </div>
              <div li className="list-group-item d-flex justify-content-between align-items-center">
                <div className="row">
                  <div className="col-6">
                    {props.nomeRecompensa0}
                  </div>
                </div>
                <div className="col-5">
                  <button className="btn btn-outline-warning bi bi-pencil-fill me-md-3">Editar</button>
                  <button className=" btn btn-outline-danger bi bi-trash-fill">Eliminar</button>
                </div>
              </div>
              <div li className="list-group-item d-flex justify-content-between align-items-center">{props.nomeRecompensa1}</div>
              <div li className="list-group-item d-flex justify-content-between align-items-center">{props.nomeRecompensa2}</div>
              <div li className="list-group-item d-flex justify-content-between align-items-center">{props.nomeRecompensa3}</div>
              <div li className="list-group-item d-flex justify-content-between align-items-center">{props.nomeRecompensa4}</div>
              <div li className="list-group-item d-flex justify-content-between align-items-center">{props.nomeRecompensa5}</div>
            </div>
        </div>
      </div>
    </div>
  );
}
