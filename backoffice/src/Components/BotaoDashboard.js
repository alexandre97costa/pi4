import React from 'react';
import { Link } from 'react-router-dom';

export default function BotaoDashboard(props) {
    return (
        <div className='col'>
            <Link to={props.to} className={'btn shadow text-break rounded-3 border-0 ' + props.class}>
                {!!props.icon && <i className={"bi me-3 " + props.icon} />}
                {props.texto}
            </Link>
        </div>
    );
}