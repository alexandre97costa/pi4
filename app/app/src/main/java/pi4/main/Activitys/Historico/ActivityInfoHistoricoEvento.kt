package pi4.main.Activitys.Historico

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.ImageView
import android.widget.TextView
import androidx.core.content.ContextCompat
import com.example.ficha8.Req
import com.google.android.material.floatingactionbutton.FloatingActionButton
import org.json.JSONObject
import pi4.main.Activitys.PontoInteresse.ActivityPontoInteresseDetalhe
import pi4.main.Classes.Reservas
import pi4.main.Classes.StartActivitys
import pi4.main.Object.UserManager
import pi4.main.R

class ActivityInfoHistoricoEvento : AppCompatActivity() {
    private lateinit var eventoId: String
    private lateinit var pontoInteresseId: String

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_info_historico_evento)

        previous()

        loadInfoHistoricoReserva()
    }

    fun previous() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }

    fun loadInfoHistoricoReserva() {
        getPutExtra()

        val nomeEvento = findViewById<TextView>(R.id.textViewNomeEvento)
        val nomeReserva = findViewById<TextView>(R.id.textViewNomeReserva)
        val dataEvento = findViewById<TextView>(R.id.textViewData)
        val horaEvento = findViewById<TextView>(R.id.textViewhoras)
        val numeroPessoas = findViewById<TextView>(R.id.textViewLugares)

        val estado = findViewById<TextView>(R.id.textViewEstado)
        val iconEstado = findViewById<ImageView>(R.id.imageViewIconEstado)

        val queryParams = JSONObject("""{}""")

        Req.GET("/reserva/${eventoId}", queryParams, this, UserManager.getUtilizador()!!.getToken(), then = { res ->
            val data = res.optJSONArray("data")
            val objectRes = data.getJSONObject(0)

            UserManager.getUtilizador()!!.reservaInfo = Reservas(
                objectRes.optInt("id").toString(),
                objectRes.optString("nome"),
                objectRes.optString("pessoas"),
                objectRes.optBoolean("validado"),
                objectRes.optJSONObject("sessao").optJSONObject("evento").optString("nome"),
                objectRes.optJSONObject("sessao").optString("data_hora"),
                objectRes.optJSONObject("sessao").optJSONObject("evento").optJSONObject("ponto_interesse").optString("id"),
                objectRes.optString("codigo_confirmacao")
            )

            Log.i("estadoReserva", UserManager.getUtilizador()!!.reservaInfo.getEstado())
            if(UserManager.getUtilizador()!!.reservaInfo.getEstado() == "Validado") {
                estado.text = UserManager.getUtilizador()!!.reservaInfo.getCodigo()
                estado.setTextColor(ContextCompat.getColor(this, R.color.greenPrincipal))
                iconEstado.setImageResource(R.drawable.verified_40px)
                iconEstado.setColorFilter(ContextCompat.getColor(this,R.color.greenPrincipal))
            }

            nomeEvento.text = UserManager.getUtilizador()!!.reservaInfo.getNomeEvento()
            nomeReserva.text = UserManager.getUtilizador()!!.reservaInfo.getNome()
            dataEvento.text = UserManager.getUtilizador()!!.reservaInfo.getDataEvento()
            horaEvento.text = UserManager.getUtilizador()!!.reservaInfo.getHoraEvento()
            numeroPessoas.text = "${UserManager.getUtilizador()!!.reservaInfo.getNumeroPessoas()} pessoas"

            btnGoPontoInteresse()
        })
    }

    fun btnGoPontoInteresse() {
        val btn = findViewById<Button>(R.id.btnGoPontoInteresse)

        btn.setOnClickListener {
            startActivity(Intent(this, ActivityPontoInteresseDetalhe::class.java)
                .putExtra("pontoInteresseId", UserManager.getUtilizador()!!.reservaInfo.getPontoInteresseId()))
        }
    }

    fun getPutExtra() {
        pontoInteresseId = intent.getStringExtra("pontoInteresseId").toString()
        eventoId = intent.getStringExtra("reservaId").toString()
    }
}