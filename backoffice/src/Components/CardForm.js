import React from 'react';

export default function CardForm(props) {
    return (
        <div className={'card card-body shadow rounded-4 border-0 ' + props.className}>
            {props.children}
        </div>
    );
}