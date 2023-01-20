

export const menu = [

    function tipoUtilizador(props) {
        if (props.tipoUtilizador === 'Agente Turistico')
            return (
                // agente turistico
                [
                    {
                        text: "Dashboard",
                        path: "/agente-turistico/dashboard",
                        icon: "speedometer2"
                    },
                    {
                        text: "Pontos de Interesse",
                        path: "/pontos-interesse",
                        icon: "geo-alt"
                    },
                    {
                        text: "Eventos",
                        path: "/eventos",
                        icon: "calendar4-event"
                    },
                    {
                        text: "Recompensas",
                        path: "recompensas",
                        icon: "gift"
                    }
                ]
            )

        else if (props.tipoUtilizador === 'Responsável de Região')
            return (
                [
                    {
                        text: "Dashboard",
                        path: "/responsavel-regiao/dashboard",
                        icon: "speedometer2"
                    },
                    {
                        text: "Agentes Turísticos",
                        path: "/2",
                        icon: "speedometer2"
                    },
                    {
                        text: "Pontos de Interesse",
                        path: "/responsavel-regiao/consultar-pontos-interesse",
                        icon: "geo-alt"
                    },
                    {
                        text: "Eventos",
                        path: "/4",
                        icon: "calendar4-event"
                    },
                    {
                        text: "Reservas",
                        path: "/5",
                        icon: "calendar4-event"
                    },
                    {
                        text: "/responsavel-regiao/lista-recompensas",
                        path: "/6",
                        icon: "gift"
                    }
                ]
            )

        else if (props.tipoUtilizador === 'Administrador')
            return (
                [
                    {
                        text: "Dashboard",
                        path: "/admin/dashboard",
                        icon: "speedometer2"
                    },
                    {
                        text: "Utilizadores",
                        path: "/admin/lista-utilizadores",
                        icon: "speedometer2"
                    },
                    {
                        text: "Pontos de Interesse",
                        path: "/pontos-interesse",
                        icon: "geo-alt"
                    },
                    {
                        text: "Eventos",
                        path: "/eventos",
                        icon: "calendar4-event"
                    },
                    {
                        text: "Recompensas",
                        path: "/recompensas",
                        icon: "gift"
                    },
                    {
                        text: "Microsite",
                        path: "/admin/microsite",
                        icon: "gift"
                    }
                ]
            )
    }
]