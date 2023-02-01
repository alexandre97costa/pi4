package pi4.main.Activitys.Recompensa

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.Button
import android.widget.TextView
import com.example.ficha8.Req
import com.google.android.material.floatingactionbutton.FloatingActionButton
import org.json.JSONObject
import pi4.main.Classes.*
import pi4.main.Object.UserManager
import pi4.main.R

class ActivityVoucherInformacoes : AppCompatActivity() {
    private lateinit var recompensaId: String
    private var pointsVoucher: Int = -1

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_voucher_informacoes)

        loginUtilizador()
        getRecompensaId()
        previous()
    }

    private fun loginUtilizador() {
        val queryParams = JSONObject("""{}""")
        val requestBody = JSONObject()

        //Adiciona elementos para o requestBody
        requestBody.put("email", UserManager.getUtilizador()!!.getEmail())
        requestBody.put("password", UserManager.getUtilizador()!!.getPasseword())

        //LOGIN
        Req.POST("/utilizador/login", queryParams, requestBody, this, "", then = { response ->
            val token = response.optString("token")
            val user = response.optString("user")

            UserManager.setUtilizador(Utilizador(
                user,
                "",
                "",
                UserManager.getUtilizador()!!.getPasseword(),
                "",
                token
            ))

            atualizarUtilizador()
        })
    }

    private fun getRecompensaId() {
        recompensaId = intent.getStringExtra("recompensaId").toString()
    }

    private fun previous() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }

    private fun atualizarUtilizador() {
        val queryParams = JSONObject("""{}""")
        val path = "/utilizador/${UserManager.getUtilizador()!!.getId()}"

        Req.GET(path, queryParams, this, UserManager.getUtilizador()!!.getToken(), then = { res ->
            val data = res.optJSONArray("data")
            val user = data.optJSONObject(0)

            UserManager.setUtilizador(Utilizador(
                user.optString("id"),
                user.optString("nome"),
                user.optString("email"),
                UserManager.getUtilizador()!!.getPasseword(),
                user.optString("pontos"),
                UserManager.getUtilizador()!!.getToken()
            ))

            //ESPAÇO PARA CONTINUAR A PAGINA
            loadPoints()

            if (verificarSeJaFoiResgatado()) {
                includeRecompensaInfoOn()
                loadInformacaoOn()
            }
            else
                loadInformacaoOff()
        })
    }

    private fun loadPoints() {
        val textView = findViewById<TextView>(R.id.scoreUtilizador)

        Points(UserManager.getUtilizador()!!.getPontos().toInt(), textView, this).loadPontos()
    }

    private fun verificarSeJaFoiResgatado(): Boolean {
        //Se vier true então ja é resgatado
        return intent.getBooleanExtra("flag", false)
    }

    private fun includeRecompensaInfoOn() {
        findViewById<View>(R.id.includeRecompensaInfoOff).visibility = View.GONE
        findViewById<View>(R.id.includeRecompensaInfoOn).visibility = View.VISIBLE
        findViewById<Button>(R.id.btnResgatar).visibility = View.GONE
    }

    private fun loadInformacaoOn() {
        val titulo = findViewById<TextView>(R.id.textViewTituloOn)
        val descricao = findViewById<TextView>(R.id.textViewDescricaoOn)
        val pontos = findViewById<TextView>(R.id.textViewPontosOn)
        val codigo = findViewById<TextView>(R.id.textViewCodigo)

        val queryParams = JSONObject("""{}""")
        val path = "/voucher/${recompensaId}"

        Req.GET(path, queryParams, this, UserManager.getUtilizador()!!.getToken(), then = { res ->
            val data = res.getJSONArray("data")
            val objectRes = data.getJSONObject(0)

            titulo.text = objectRes.optJSONObject("recompensa").getString("titulo")
            descricao.text = objectRes.optJSONObject("recompensa").getString("descricao")
            pontos.text = "${objectRes.optString("pontos_gastos")} pontos"
            codigo.text = objectRes.optString("codigo_confirmacao")
        })
    }

    private fun loadInformacaoOff() {
        val titulo = findViewById<TextView>(R.id.textViewTitulo)
        val descricao = findViewById<TextView>(R.id.textViewDescricao)
        val pontos = findViewById<TextView>(R.id.textViewPontos)

        val queryParams = JSONObject("""{}""")
        val path = "/recompensa/${recompensaId}"

        Req.GET(path, queryParams, this, UserManager.getUtilizador()!!.getToken(), then = { res ->
            val data = res.getJSONArray("data")
            val objectRes = data.getJSONObject(0)

            val recompensa = Recompensa(
                objectRes.optInt("id").toString(),
                objectRes.getString("titulo"),
                objectRes.getString("descricao"),
                objectRes.optInt("pontos").toString(),
                objectRes.optJSONObject("tipo_interesse").optString("nome")
            )

            pointsVoucher = recompensa.pontos.toInt()

            titulo.text = recompensa.nomeRecompesa
            descricao.text = recompensa.descricao
            pontos.text = "${recompensa.pontos} pontos"

            confirmPoints()
        })
    }

    private fun confirmPoints() {
        val buttonResgatar = findViewById<Button>(R.id.btnResgatar)

        Log.i("PontosRecompensa", pointsVoucher.toString())
        Log.i("PontosUtilizador", UserManager.getUtilizador()!!.getPontos())

        if(UserManager.getUtilizador()!!.getPontos().toInt() < pointsVoucher) {
            buttonResgatar.isEnabled = false
            return buttonResgatar.setBackgroundResource(R.drawable.shape_gray.toInt())
        }

        btnResgatar()
    }

    private fun btnResgatar() {
        val btnResgatar = findViewById<Button>(R.id.btnResgatar)

        btnResgatar.setOnClickListener {
            findViewById<View>(R.id.includeRecompensaInfoOff).visibility = View.GONE
            findViewById<View>(R.id.includeRecompensaInfoOn).visibility = View.VISIBLE
            btnResgatar.visibility = View.GONE
            postRecompensa()
        }
    }

    private fun postRecompensa() {
        val queryParams = JSONObject("""{}""")
        val requestBody = JSONObject()
        requestBody.put("recompensa_id", recompensaId)

        Req.POST("/voucher", queryParams, requestBody, this, UserManager.getUtilizador()!!.getToken(), then = { res ->
            val queryParamsLogin = JSONObject("""{}""")
            val requestBodyLogin = JSONObject()

            //Adiciona elementos para o requestBody
            requestBodyLogin.put("email", UserManager.getUtilizador()!!.getEmail())
            requestBodyLogin.put("password", UserManager.getUtilizador()!!.getPasseword())

            //LOGIN
            Req.POST("/utilizador/login", queryParamsLogin, requestBodyLogin, this, "", then = { response ->
                val token = response.optString("token")
                val user = response.optString("user")

                UserManager.setUtilizador(Utilizador(
                    user,
                    "",
                    "",
                    UserManager.getUtilizador()!!.getPasseword(),
                    "",
                    token
                ))

                val queryParamsAtualizar = JSONObject("""{}""")
                val path = "/utilizador/${UserManager.getUtilizador()!!.getId()}"

                Req.GET(path, queryParamsAtualizar, this, UserManager.getUtilizador()!!.getToken(), then = { res ->
                    val data = res.optJSONArray("data")
                    val user = data.optJSONObject(0)

                    UserManager.setUtilizador(Utilizador(
                        user.optString("id"),
                        user.optString("nome"),
                        user.optString("email"),
                        UserManager.getUtilizador()!!.getPasseword(),
                        user.optString("pontos"),
                        UserManager.getUtilizador()!!.getToken()
                    ))

                    //ESPAÇO PARA CONTINUAR A PAGINA
                    loadPoints()
                    includeRecompensaInfoOn()
                    loadInformacaoOn()
                })
            })
        })
    }
}