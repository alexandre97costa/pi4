package pi4.main.Object

import android.content.Context
import android.util.Log
import com.example.ficha8.Req
import org.json.JSONObject
import pi4.main.Classes.Utilizador

object UserManager {
    private var utilizador: Utilizador? = null

    fun getUtilizador(): Utilizador? {
        return this.utilizador
    }

    fun loginUtilizador(email: String, password: String, context: Context) {
        //Cria os filtros para enviar para API
        val queryParams = JSONObject("""{}""")
        val requestBody = JSONObject()
        requestBody.put("email", email)
        requestBody.put("password", password)
        Log.i("request body\n", requestBody.toString(2))

        Req.POST("/utilizador/login", queryParams, requestBody, context, "")
        /*
        , then = { response ->


            Log.i("caralho", response.toString(2))

            val token = response.optString("token")
            val user = response.optJSONObject("user")

            try {
                this.utilizador = Utilizador(
                    user.getString("id"),
                    user.getString("nome"),
                    user.getString("email"),
                    password,
                    user.getString("pontos"),
                    token
                )

                Log.i("utilizador", this.getUtilizador().toString())
                Log.i("utilizador", this.getUtilizador()!!.getToken())
            } catch (e:Error) {
                Log.i("erro", e.toString())
            }


        })
        *
         */
    }

    fun postUtilizador(nome: String, email: String, password: String, context: Context) {
        val queryParams = JSONObject("""{}""")
        val requestBody = JSONObject()
        //Envio por requestBody das informações do utilizador
        requestBody.put("nome", nome)
        requestBody.put("email", email)
        requestBody.put("data_nasc", "2001-09-28")//data por mudar
        requestBody.put("password", password)
        requestBody.put("tipo", 1)//Só criar utilizadores do tipo = 1

        Req.POST("/utilizador", queryParams, requestBody, context, "")
        /*
        , then = { res ->
            val user = res.getJSONObject("user")

            this.utilizador = Utilizador(
                user.getString("id"),
                user.getString("nome"),
                user.getString("email"),
                password,
                user.getString("pontos"),
                ""
            )
        })
        *
         */

        loginUtilizador(utilizador!!.getEmail(), password, context)
    }
}