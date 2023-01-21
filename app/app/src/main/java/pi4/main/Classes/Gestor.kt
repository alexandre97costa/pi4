package pi4.main.Classes

import android.content.Context
import com.example.ficha8.Req
import org.json.JSONObject
import pi4.main.Object.UserManager

class Gestor() {
    val listaPontosInteresse: ArrayList<PontoInteresse> = arrayListOf()
    val listaRecompensa: ArrayList<Recompensa> = arrayListOf()

    var pontoInteresse: PontoInteresse = PontoInteresse(
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        0f,
        ""
    )
    var recompensa: Recompensa = Recompensa(
        "",
        "",
        "",
        "",
        ""
    )

    fun getAllPontosInteresse(context: Context) {
        //Para termos acerteza que não temos informação duplicada
        listaPontosInteresse.clear()

        //Pedido API
        val queryParams = JSONObject("""{}""")
        val requestBody = JSONObject("""{}""")
        Req().GET("/pi", queryParams, requestBody, context, UserManager.getUtilizador()!!.getToken() ,then = { res ->
            val data = res.getJSONArray("data")

            for (i in 0..data.length()) {
                val objectRes = data.getJSONObject(i)

                listaPontosInteresse.add(PontoInteresse(
                    objectRes.getString("id"),
                    objectRes.getJSONArray("imagens").getString( 0), //img
                    objectRes.getString("nome"),
                    objectRes.getString("morada"),
                    objectRes.getString("descricao"),
                    objectRes.getJSONObject("tipo_interesse").getString("nome"), //tipo
                    objectRes.getJSONObject("freguesia").getString("nome"), //freguesia
                    objectRes.getString("pontos"),
                    objectRes.getDouble("avg_avaliacao").toFloat(),
                    objectRes.getJSONObject("agente_turistico").getString("nome") //agente
                ))
            }
        })
    }

    fun getPontoInteresseId(id: String, context: Context) {
        val queryParams = JSONObject("""{}""")
        val requestBody = JSONObject("""{}""")
        val path = "/pi/${id}"

        Req().GET(path, queryParams, requestBody, context, UserManager.getUtilizador()!!.getToken(), then = { res ->
            val data = res.getJSONArray("data")
            val objectRes = data.getJSONObject(0)

            pontoInteresse = PontoInteresse(
                objectRes.getString("id"),
                objectRes.getJSONArray("imagens").getString( 0), //img
                objectRes.getString("nome"),
                objectRes.getString("morada"),
                objectRes.getString("descricao"),
                objectRes.getJSONObject("tipo_interesse").getString("nome"), //tipo
                objectRes.getJSONObject("freguesia").getString("nome"), //freguesia
                objectRes.getString("pontos"),
                objectRes.getDouble("avg_avaliacao").toFloat(),
                objectRes.getJSONObject("agente_turistico").getString("nome") //agente
            )
        })
    }

    fun getAllRecompensas(context: Context) {
        //Para termos acerteza que não temos informação duplicada
        listaRecompensa.clear()

        //Pedido API
        val queryParams = JSONObject("""{}""")
        val requestBody = JSONObject("""{}""")
        Req().GET("/recompensa", queryParams, requestBody, context, UserManager.getUtilizador()!!.getToken(), then = { res ->
            val data = res.getJSONArray("data")

            for (i in 0..data.length()) {
                val objectRes = data.getJSONObject(i)

                listaRecompensa.add(Recompensa(
                    objectRes.getString("id"),
                    objectRes.getString("titulo"),
                    objectRes.getString("descricao"),
                    objectRes.getString("pontos"),
                    "Paisagem" //Mandar categoria
                ))
            }
        })
    }

    fun getRecompensaId(id: String, context: Context) {
        val queryParams = JSONObject("""{}""")
        val requestBody = JSONObject("""{}""")
        val path = "/recompensa/${id}"

        Req().GET(path, queryParams, requestBody, context, UserManager.getUtilizador()!!.getToken(), then = { res ->
            val data = res.getJSONArray("data")
            val objectRes = data.getJSONObject(0)

            listaRecompensa.add(Recompensa(
                objectRes.getString("id"),
                objectRes.getString("titulo"),
                objectRes.getString("descricao"),
                objectRes.getString("pontos"),
                "Paisagem" //Mandar categoria
            ))
        })
    }
}