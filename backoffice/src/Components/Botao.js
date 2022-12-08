import React from "react";

export default function Botao(props) {
    return (
        <button onClick={(value) => props.onClick(value)} type="button" className="btn btn-primary">{props.texto}</button>
    )
}