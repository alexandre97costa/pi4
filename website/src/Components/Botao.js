import React from "react";

export default function Botao(props) {
  return (
    <button
      onClick={(value) => props.onClick(value)}
      id={changeId()}
      type={changeType()}
      className={changeClassName()}
    >
      {props.texto}
    </button>
  );

  function changeClassName() {
    if (!props.className) return "btn btn-primary btn-lg";
    return "btn " + props.className;
  }

  function changeType() {
    if (!props.type) return "button";
    return props.type;
  }

  function changeId() {
    if (!props.id) return;
    return props.id;
  }
}
