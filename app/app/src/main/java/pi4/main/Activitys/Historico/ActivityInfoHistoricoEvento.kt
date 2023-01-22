package pi4.main.Activitys.Historico

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ImageView
import android.widget.TextView
import androidx.core.content.ContextCompat
import com.example.ficha8.Req
import com.google.android.material.floatingactionbutton.FloatingActionButton
import org.json.JSONObject
import pi4.main.Classes.Eventos
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
        val numeroPessoas = findViewById<TextView>(R.id.textViewLugares)

        val estado = findViewById<TextView>(R.id.textViewEstado)
        val iconEstado = findViewById<ImageView>(R.id.imageViewIconEstado)

        val queryParams = JSONObject("""{}""")

        Req.GET("/reserva/${eventoId}", queryParams, this, UserManager.getUtilizador()!!.getToken(), then = { res ->
            val data = res.optJSONArray("data")
            val objectRes = data.getJSONObject(0)

            UserManager.getUtilizador()!!.listaHistoricoReservas.add(Reservas(
                objectRes.optInt("id").toString(),
                objectRes.optString("nome"),
                objectRes.optString("pessoas"),
                objectRes.optBoolean("validado"),
                objectRes.optJSONObject("sessao").optJSONObject("evento").optString("nome"),
                objectRes.optJSONObject("sessao").optString("data_hora"),
                objectRes.optString("codigo_confirmacao")
            ))

            if(UserManager.getUtilizador()!!.getReservaDetails(eventoId).getEstado() == "valido") {
                estado.text = "Validado"
                estado.setTextColor(ContextCompat.getColor(this, R.color.greenPrincipal))
                iconEstado.setImageResource(R.drawable.verified_40px)
                iconEstado.setColorFilter(ContextCompat.getColor(this,R.color.greenPrincipal))
            }

            //nomeEvento.text = UserManager.getUtilizador()!!.getReservaDetails(eventoId).getEvento().nome
            //nomeReserva.text = UserManager.getUtilizador()!!.getReservaDetails(eventoId).getNome()
            //dataEvento.text = UserManager.getUtilizador()!!.getReservaDetails(eventoId).getEvento().data
            //numeroPessoas.text = UserManager.getUtilizador()!!.getReservaDetails(eventoId).getNumeroPessoas()
        })
    }

    fun getPutExtra() {
        pontoInteresseId = intent.getStringExtra("pontoInteresseId").toString()
        eventoId = intent.getStringExtra("reservaId").toString()
    }
}