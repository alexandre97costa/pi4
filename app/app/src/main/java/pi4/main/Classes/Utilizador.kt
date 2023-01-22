package pi4.main.Classes

import android.content.Context
import com.example.ficha8.Req
import org.json.JSONObject

class Utilizador(
    id: String,
    nome: String,
    email: String,
    passeword: String,
    pontos: String,
    token: String
) {
    private var id: String
    private var nome: String
    private var email: String
    private var passeword: String
    private var pontos: String
    private var token: String
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
        this.passeword = passeword
        this.pontos = pontos
        this.token = token
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

    fun getPasseword(): String {
        return this.passeword
    }

    fun getPontos(): String {
        return this.pontos
    }

    fun getToken(): String {
        return this.token
    }

    fun setToken(token: String) {
        this.token = token
    }

    //SET VARIAVEIS SENSIVEIS DO UTILIZADOR
    fun setNome(nome: String) {
        this.nome = nome
    }

    fun setEmail(email: String) {
        this.email = email
    }

    //PEDIDO API
    fun getRecompensasJaResgatadas(utilizadorId: String) {
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

    fun getHistocoReservas(context: Context) {
        //Limpar o arrayList antes de fazer um novo pedido API
        listaHistoricoReservas.clear()

        //Pedido API
        val queryParams = JSONObject("""{}""")

        Req.GET("/reserva", queryParams, context, this.token, then = { res ->
            val data  = res.getJSONArray("data")

            for (i in 0..data.length()) {
                val objectRes = data.getJSONObject(i)

                this.listaHistoricoReservas.add(HistoricoReservas(
                        objectRes.getString("id"),
                        objectRes.getString("nome"),
                        "",
                        objectRes.getString("pessoas"),
                        getValidado(objectRes.getString("validado").toBoolean()),
                        createEvento(objectRes.getJSONObject("sessao")),
                        objectRes.getJSONObject("sessao").getJSONObject("evento").getString("ponto_interesse_id")
                ))
            }
        })
    }

    private fun createEvento(sessaoEvento: JSONObject): Eventos {
        return Eventos(
            sessaoEvento.getJSONObject("evento").getString("id"),
            sessaoEvento.getJSONObject("evento").getString("nome"),
            sessaoEvento.getString("data_hora"), //terá de ser fazer um split?
            sessaoEvento.getJSONObject("evento").getString("descricao"),
            sessaoEvento.getJSONObject("evento").getJSONObject("ponto_interesse").getString("morada"),
            sessaoEvento.getJSONObject("evento").getString("pontos").toInt(),
            sessaoEvento.getString("vagas").toInt(), //não será mais seguro entrar no objeto evento e ir buscar a informacao da lotação
            sessaoEvento.getString("data_hora").toInt(), //Será necessario mudar para string maybe (fazer split),
            "",
            ""
        )
    }
    private fun getValidado(validado: Boolean): String {
        if (validado)
            return "Validado"

        return "Pendente"
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
