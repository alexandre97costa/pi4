import React from 'react';
import { Link } from 'react-router-dom';

export default function BotaoDashboard(props) {
    function teste() {
        if(!!props.icon)
            return(<i className={"bi me-3 " + props.icon} />)
    }
    return (
        <Link to={props.to} className={'btn shadow text-break rounded-4 ' + props.colorBotao}>{teste()}{props.texto}</Link>
    );
}