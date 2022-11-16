import React from 'react';

import TemplatePagina from '../../Helpers/templatePagina';
import Main from './main'

let menu = [
	{ icon: "speedometer2", 	text: "Dashboard", 				path: "/"},
	{ icon: "geo-alt", 			text: "Pontos de Interesse", 	path: "/teste"},
	{ icon: "calendar4-event", 	text: "Eventos", 				path: "/"},
	{ icon: "gift", 			text: "Recompensas", 			path: "/"}
]

export function Exemplo() {
    return (
        <TemplatePagina
            userType={"Tipo de pessoa"}
            userName={"nome da pessoa"}
            menu={menu}
            selected={0}
            title={"Olá, Pessoa!"}
        >
            <Main />
        </TemplatePagina>
    );
}