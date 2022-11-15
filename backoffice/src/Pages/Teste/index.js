import React, { useEffect } from 'react';

import TemplatePagina from '../../Helpers/templatePagina';
import Main from './main'

let agente_turistico = [
	{ icon: "speedometer2", 	text: "Dashboard", 				path: "/"},
	{ icon: "geo-alt", 			text: "Pontos de Interesse", 	path: "/teste"},
	{ icon: "calendar4-event", 	text: "Eventos", 				path: "/"},
	{ icon: "gift", 			text: "Recompensas", 			path: "/"}
]

export function Teste() {
    useEffect(() => {
        console.log("✅ Teste()")
    }, [])

    return (
        <TemplatePagina
            userType={"Agente Turístico"}
            userName={"Joaquim"}
            menu={agente_turistico}
            selected={0}
            title={"Olá, Joaquim!"}
        >
            <Main />
        </TemplatePagina>
    );
}