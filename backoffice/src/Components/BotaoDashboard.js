import React from 'react';
import { Link } from 'react-router-dom';

export default function BotaoDashboard(props) {
    function teste() {
        if (!!props.icon)
            return (<i className={"bi me-3 " + props.icon} />)
    }
    return (
        <div className='col'>
            <Link to={props.to} className={'btn shadow text-break rounded-3 mx-auto ' + props.class}>{teste()}{props.texto}</Link>
        </div>
    );
}