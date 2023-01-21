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

        Req().GET("/utilizador/login", queryParams, requestBody, context, "", then = { res ->
            val token = res.getString("token")
            val user = res.getJSONObject("user")

            this.utilizador = Utilizador(
                user.getString("id"),
                user.getString("nome"),
                user.getString("email"),
                password,
                user.getString("pontos"),
                token
            )
        })

        Log.i("utilizador", this.getUtilizador()!!.getToken())
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

        Req().POST("/utilizador", queryParams, requestBody, context, "", then = { res ->
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

        loginUtilizador(utilizador!!.getEmail(), password, context)
    }
}