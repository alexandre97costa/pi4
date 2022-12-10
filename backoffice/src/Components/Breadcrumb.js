import React from 'react';

export default function Breadcrumb(props) {
    return (
        <p className="my-5 fs-3 fw-bold">
            <i className={props.icon} /> {props.nome}
        </p>
    );
}