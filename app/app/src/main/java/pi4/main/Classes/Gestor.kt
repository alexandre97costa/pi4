package pi4.main.Classes

import android.content.Context
import android.util.Log
import android.widget.ListView
import com.example.ficha8.Req
import kotlinx.coroutines.*
import org.json.JSONObject
import pi4.main.Adapter.SetAdapterCard
import pi4.main.Adapter.SetAdapterCardRecompensa
import pi4.main.Object.UserManager
import pi4.main.R

class Gestor() {
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

    fun getAllPontosInteresse(context: Context, listView: ListView, listarPontosInteresse: Boolean, nome: String, categoriaId: String) {
        //Pedido API
        val queryParams = JSONObject("""{}""")
        queryParams.put("nome_desc", nome)
        queryParams.put("tipo_interesse_id", categoriaId)

        Log.i("Token GET PONTOS", UserManager.getUtilizador()!!.getToken())

        Req.GET("/pi", queryParams, context, UserManager.getUtilizador()!!.getToken() ,then = { res ->
            val data = res.optJSONArray("data")

            var listaPontosInteresse: ArrayList<PontoInteresse> = arrayListOf()

            for (i in 0..data!!.length() - 1) {
                val objectRes = data!!.optJSONObject(i)

                listaPontosInteresse.add(PontoInteresse(
                    objectRes.optInt("id").toString(),
                    objectRes.getJSONArray("imagens").optJSONObject(0).optString("url"), //image
                    objectRes.optString("nome"),
                    objectRes.optString("morada"),
                    objectRes.optString("descricao"),
                    objectRes!!.optJSONObject("tipo_interesse")!!.optString("nome"), //tipo
                    objectRes.optJSONObject("freguesia").optString("nome"), //freguesia
                    objectRes.optInt("pontos").toString(),
                    objectRes.optDouble("avg_avaliacao").toFloat(),
                    objectRes!!.optJSONObject("agente_turistico")!!.optString("nome") //agente
                ))
            }

            Log.i("pontoInteresse", "${listaPontosInteresse.count()}")

            if(listarPontosInteresse)
                listAllPontosInteresse(context, listView, listaPontosInteresse)
        })
    }

    private fun listAllPontosInteresse(context: Context, listView: ListView, listaPontosInteresse: ArrayList<PontoInteresse>) {
        val customAdapter = SetAdapterCard(context, listaPontosInteresse)
        listView.adapter = customAdapter
    }

    fun fragmentRecompensasListar(context: Context, listView: ListView, categoriaId: String) {
        //Para termos acerteza que não temos informação duplicada
        listaRecompensa.clear()

        //Pedido API
        val queryParams = JSONObject("""{}""")
        queryParams.put("tipo_interesse_id", categoriaId)

        Req.GET("/recompensa", queryParams, context, UserManager.getUtilizador()!!.getToken(), then = { res ->
            val data = res.optJSONArray("data")

            for (i in 0..data.length() - 1) {
                val objectRes = data.optJSONObject(i)

                listaRecompensa.add(Recompensa(
                    objectRes.optInt("id").toString(),
                    objectRes.optString("titulo"),
                    objectRes.optString("descricao"),
                    objectRes.optInt("pontos").toString(),
                    objectRes.optJSONObject("tipo_interesse").optString("nome")
                ))
            }

            val customAdapter = SetAdapterCardRecompensa(context, listaRecompensa, false)
            listView.adapter = customAdapter
        })
    }
}