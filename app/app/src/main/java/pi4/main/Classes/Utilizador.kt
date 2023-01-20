package pi4.main.Classes

class Utilizador(
    id: String,
    nome: String,
    email: String,
    pontos: String
) {
    private var id: String
    private var nome: String
    private var email: String
    private var pontos: String
    //Criação das listas
    var listaHistoricoPontos: ArrayList<HistoricoPontos> = arrayListOf()
    var listaHistoricoVisitas: ArrayList<HistoricoVisitas> = arrayListOf()
    var listaHistoricoReservas: ArrayList<HistoricoReservas> = arrayListOf()
    var listaRecompensasJaResgatadas: ArrayList<Recompensa> = arrayListOf()

    //TEMOS SEMPRE DE AO CHAMAR A CLASS MANDAR ESTE ELEMENTOS
    init {
        this.id = id
        this.nome = nome
        this.email = email
        this.pontos = pontos
    }

    //GET VARIAVEIS SENSIVEIS DO UTILIZADOR
    fun getId(): String {
        return this.id
    }
    fun getNome(): String {
        return this.nome
    }

    fun getEmail(): String {
        return this.email
    }

    fun getPontos(): String {
        return this.pontos
    }

    //SET VARIAVEIS SENSIVEIS DO UTILIZADOR
    fun setNome(nome: String) {
        this.nome = nome
    }

    fun setEmail(email: String) {
        this.email = email
    }

    //PEDIDO API
    fun getUtilizador(id: String) {
        //Pedido API do utilizador
    }

    fun getRecompensasJaResgatadas(id: String) {
        //limpar arrayList antes de fazer um pedido API
        listaRecompensasJaResgatadas.clear()

        //exemplo de pedido API
        this.listaRecompensasJaResgatadas.add(
            Recompensa(
                "1",
                "Café frio",
                "Este café vale ZERO",
                "59",
                "Comércio"
            )
        )
    }

    fun getRecompensasJaResgatadasDetails(id: String): Recompensa {
        getRecompensasJaResgatadas(this.id)

        return listaRecompensasJaResgatadas[id.toInt()-1]
    }

    fun getHistocoReservas(id: String) {
        //Limpar o arrayList antes de fazer um novo pedido API
        listaHistoricoReservas.clear()

        val eventoTeste = Eventos(
            "1",
            "Recital das Aves",
            "25/10/2022",
            "Um recital seca",
            "Rossio",
            10,
            2,
            10,
            "Comércio",
            "1"
        )

        //Exemplo de pedido API
        this.listaHistoricoReservas.add(
            HistoricoReservas(
                "1",
                "Rubenzinho",
                "910933857",
                "2",
                "valido",
                eventoTeste,
                "1"
            )
        )
        this.listaHistoricoReservas.add(
            HistoricoReservas(
                "2",
                "José",
                "910933857",
                "10",
                "pendente",
                eventoTeste,
                "1"
            )
        )
    }

    fun getReservaDetails(id: String): HistoricoReservas {
        //Pedido API
        return listaHistoricoReservas[id.toInt() - 1]
    }

    fun getListaHistoricoVisitas(id: String) {
        //limpar o arrayList antes de um novo pedido API
        listaHistoricoVisitas.clear()

        //exemplo de pedido API
        this.listaHistoricoVisitas.add(
            HistoricoVisitas(
                "1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/aa/c9/2d/camara-municipal-de-viseu.jpg?w=1200&h=-1&s=1",
                "Camara de Viseu",
                "Rossio",
                "Museu"
            )
        )
        this.listaHistoricoVisitas.add(
            HistoricoVisitas(
                "2",
                "https://upload.wikimedia.org/wikipedia/commons/7/7c/Praia_da_Rocha%2C_Portim%C3%A3o_2.jpg",
                "Praia da Rocha",
                "Portimão",
                "Praia"
            )
        )
    }

    fun getListaHistoricoPontos(id: String) {
        //Limpar o arrayList antes de um pedido API
        listaHistoricoPontos.clear()

        //exemplo de pedido API
        this.listaHistoricoPontos.add(
            HistoricoPontos(
                "Jardim das mães",
                "24/12/2022",
                "10",
                "positivo"
            ))
        this.listaHistoricoPontos.add(HistoricoPontos(
            "Jardim das mães",
            "24/12/2022",
            "10",
            "positivo"
        ))
        this.listaHistoricoPontos.add(HistoricoPontos(
            "Jardim das mães",
            "24/12/2022",
            "10",
            "negativo"
        ))
    }
}
