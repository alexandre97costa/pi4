package pi4.main.Classes

import SetAdapterCardHistoricoPontos
import android.content.Context
import android.util.Log
import android.widget.ListView
import com.example.ficha8.Req
import org.json.JSONObject
import pi4.main.Adapter.SetAdapterCardHistoricoVisitas
import pi4.main.Adapter.SetAdapterCardRecompensa
import pi4.main.Object.UserManager
import pi4.main.R

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
    var listaHistoricoReservas: ArrayList<Reservas> = arrayListOf()
    var listaRecompensasJaResgatadas: ArrayList<Recompensa> = arrayListOf()

    lateinit var reservaInfo: Reservas

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
    fun getRecompensasJaResgatadas(context: Context, listView: ListView) {
        //limpar arrayList antes de fazer um pedido API
        listaRecompensasJaResgatadas.clear()

        val queryParams = JSONObject("""{}""")
        queryParams.put("visitante_id", id)

        Req.GET("/voucher", queryParams, context, token, then = { res ->
            val data = res.optJSONArray("data")

            for (i in 0..data.length() - 1) {
                val objectRes = data.optJSONObject(i)

                listaRecompensasJaResgatadas.add(Recompensa(
                    objectRes.optInt("id").toString(),
                    objectRes.optJSONObject("recompensa").optString("titulo"),
                    objectRes.optJSONObject("recompensa").optString("descricao"),
                    objectRes.optInt("pontos_gastos").toString(),
                    objectRes.optJSONObject("recompensa").optJSONObject("tipo_interesse").optString("nome")
                ))
            }

            val customAdapter = SetAdapterCardRecompensa(context, listaRecompensasJaResgatadas, true)
            listView.adapter = customAdapter
        })
    }

    fun getListaHistoricoPontos(context: Context, listView: ListView) {
        listaHistoricoPontos.clear()

        val path = "/historico/pontos/" + UserManager.getUtilizador()!!.getId()
        val queryParams = JSONObject("""{}""")

        Req.GET(path, queryParams, context, UserManager.getUtilizador()!!.getToken(), then = { res ->
            val data = res.optJSONArray("output")

            for (i in 0..data.length() - 1) {
                val objectRes = data.getJSONObject(i)

                Log.i("Pontos", objectRes.toString())
                Log.i("NOME", objectRes.optString("nome"))

                listaHistoricoPontos.add(HistoricoPontos(
                    objectRes.optString("nome"),
                    objectRes.optString("data"),
                    objectRes.optInt("pontos").toString(),
                    objectRes.optBoolean("boolean")
                ))
            }

            val customAdapter = SetAdapterCardHistoricoPontos(context, listaHistoricoPontos)
            listView.adapter = customAdapter
        })
    }
}
