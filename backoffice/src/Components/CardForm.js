import React from 'react';

export default function CardForm(props) {
    return (
        <div className={'card card-body shadow rounded-4 border border-light ' + props.className}>
            {props.children}
        </div>
    );
}