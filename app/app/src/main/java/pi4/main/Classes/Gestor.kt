package pi4.main.Classes

import android.content.Context
import com.example.ficha8.Req
import org.json.JSONObject
import pi4.main.Object.UserManager

class Gestor() {
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

    val listaPontosInteresse: ArrayList<PontoInteresse> = arrayListOf()
    val listaRecompensa: ArrayList<Recompensa> = arrayListOf()


    fun getPontosInteresseAPI(context: Context) {
        //Para termos acerteza que não temos informação duplicada
        listaPontosInteresse.clear()

        //Pedido API
        val queryParams = JSONObject("""{}""")
        val requestBody = JSONObject("""{}""")
        Req().GET("/pi", queryParams, requestBody, context, UserManager.getUtilizador()!!.getToken() ,then = { res ->
            res.getJSONArray("data")
        })

        listaPontosInteresse.add(PontoInteresse(
             "1",
             "https://previews.123rf.com/images/dudlajzov/dudlajzov2001/dudlajzov200100241/138309426-viseu-portugal-may-20-2019-view-of-a-park-jardim-das-maes-in-viseu-portugal.jpg",
             "Jardim das Mães",
             "Largo do Rossio",
             "Um jardim lindo",
             "Paisagem",
             "Viseu",
             "12",
             4.2f,
             "Roberto"
        ))
    }

    fun getPontoInteresseId(id: String, context: Context) {
        getPontosInteresseAPI(context)
        pontoInteresse = listaPontosInteresse[id.toInt() - 1]
    }

    fun getAllRecompensas() {
        //Fazer pedido API
        listaRecompensa.add(
            Recompensa(
            "1",
            "Pizza Gratis",
            "Pizza incrivel gratis",
            "120",
            "Restaurante",
            ))
        listaRecompensa.add(Recompensa(
            "2",
            "Café Gratis",
            "Pizza incrivel gratis",
            "100",
            "Restaurante",
        ))
        listaRecompensa.add(Recompensa(
            "3",
            "Cinema Gratis",
            "Pizza incrivel gratis",
            "10",
            "Restaurante",
        ))
        listaRecompensa.add(Recompensa(
            "4",
            "Pizza Gratis",
            "Pizza incrivel gratis",
            "200",
            "Restaurante",
        ))
    }

    fun getRecompensaId(id: String): Recompensa {
        getAllRecompensas()
        return listaRecompensa[id.toInt() - 1]
    }
}