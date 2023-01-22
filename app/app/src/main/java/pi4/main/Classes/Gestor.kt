package pi4.main.Classes

import android.content.Context
import android.util.Log
import android.widget.ListView
import com.example.ficha8.Req
import org.json.JSONObject
import pi4.main.Adapter.SetAdapterCard
import pi4.main.Object.UserManager
import pi4.main.R

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

    fun getAllPontosInteresse(context: Context, listView: ListView, listarPontosInteresse: Boolean) {
        //Para termos acerteza que não temos informação duplicada
        listaPontosInteresse.clear()

        //Pedido API
        val queryParams = JSONObject("""{}""")

        Log.i("Token GET PONTOS", UserManager.getUtilizador()!!.getToken())

        Req.GET("/pi", queryParams, context, UserManager.getUtilizador()!!.getToken() ,then = { res ->
            val data = res.optJSONArray("data")

            for (i in 0..data.length() - 1) {
                val objectRes = data.optJSONObject(i)

                listaPontosInteresse.add(PontoInteresse(
                    objectRes.optInt("id").toString(),
                    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Praia_da_Rocha%2C_Portim%C3%A3o_2.jpg",//objectRes.getJSONArray("imagens").getString( 0), //img
                    objectRes.optString("nome"),
                    objectRes.optString("morada"),
                    objectRes.optString("descricao"),
                    objectRes.optJSONObject("tipo_interesse").optString("nome"), //tipo
                    objectRes.optJSONObject("freguesia").optString("nome"), //freguesia
                    objectRes.optInt("pontos").toString(),
                    objectRes.optDouble("avg_avaliacao").toFloat(),
                    objectRes.optJSONObject("agente_turistico").optString("nome") //agente
                ))
            }

            Log.i("pontoInteresse", "${listaPontosInteresse.count()}")

            if(listarPontosInteresse)
                listAllPontosInteresse(context, listView)
        })
    }

    private fun listAllPontosInteresse(context: Context, listView: ListView) {
        val customAdapter = SetAdapterCard(context, listaPontosInteresse)
        listView.adapter = customAdapter
    }

    fun getPontoInteresseId(id: String, context: Context) {
        val queryParams = JSONObject("""{}""")
        val path = "/pi/${id}"

        Req.GET(path, queryParams, context, UserManager.getUtilizador()!!.getToken(), then = { res ->
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

        Req.GET("/recompensa", queryParams, context, UserManager.getUtilizador()!!.getToken(), then = { res ->
            val data = res.optJSONArray("data")

            for (i in 0..data.length()) {
                val objectRes = data.optJSONObject(i)

                listaRecompensa.add(Recompensa(
                    objectRes.optString("id"),
                    objectRes.optString("titulo"),
                    objectRes.optString("descricao"),
                    objectRes.optString("pontos"),
                    "Paisagem" //Mandar categoria
                ))
            }
        })
    }

    fun getRecompensaId(id: String, context: Context) {
        val queryParams = JSONObject("""{}""")
        val path = "/recompensa/${id}"

        Req.GET(path, queryParams, context, UserManager.getUtilizador()!!.getToken(), then = { res ->
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