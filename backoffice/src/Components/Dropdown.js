import React from 'react';

export default function Dropdown(props) {
    const categorias = ["Admin", "Responsavel de região", "Agente turistico"]

    return (
        <div className='dropdown mb-3'>
            <button className="btn w-100 text-start bg-white border rounded-4 shadow-1 dropdown-toggle me-md-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {props.nomeBotao}
            </button>
            <ul className='dropdown-menu'>
                {categorias.map((item, index) => {
                    return (
                        <li key={index} className="dropdown-item">{item}</li>
                    )
                })}
            </ul>
        </div>
    );
}