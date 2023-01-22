package pi4.main.Object

import android.content.Context
import android.content.Intent
import android.util.Log
import androidx.core.content.ContextCompat.startActivity
import com.example.ficha8.Req
import org.json.JSONObject
import pi4.main.Classes.Utilizador
import pi4.main.MainActivity

object UserManager {
    private var utilizador: Utilizador? = null

    fun getUtilizador(): Utilizador? {
        return this.utilizador
    }

    fun loginUtilizador(email: String, password: String, context: Context) {
        //Cria os filtros para enviar para API
        val queryParams = JSONObject("""{}""")
        val requestBody = JSONObject()

        //Adiciona elementos para o requestBody
        requestBody.put("email", email)
        requestBody.put("password", password)

        Req.POST("/utilizador/login", queryParams, requestBody, context, "", then = { response ->
            val token = response.optString("token")
            val user = response.optString("user")

            this.utilizador = Utilizador(
                user,
                "",
                "",
                password,
                "",
                token
            )

            val path = "/utilizador/${this.utilizador!!.getId()}"

            Req.GET(path, queryParams, context, this.utilizador!!.getToken(), then = { res ->
                val data = res.optJSONArray("data")
                val user = data.optJSONObject(0)

                this.utilizador = Utilizador(
                    user.optString("id"),
                    user.optString("nome"),
                    user.optString("email"),
                    password,
                    user.optString("pontos"),
                    token
                )

                Log.i("utilizador", this.utilizador!!.getNome())

                context.startActivity(Intent(context, MainActivity::class.java))
            })
        })
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

        Req.POST("/utilizador", queryParams, requestBody, context, "", then = { res ->
            val user = res.getJSONObject("user")

            this.utilizador = Utilizador(
                user.optString("id"),
                user.optString("nome"),
                user.optString("email"),
                password,
                user.optString("pontos"),
                ""
            )

            loginUtilizador(utilizador!!.getEmail(), password, context)
        })
    }
}