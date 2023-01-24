package pi4.main.Activitys.Evento

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import com.example.ficha8.Req
import com.google.android.material.floatingactionbutton.FloatingActionButton
import org.json.JSONObject
import pi4.main.Classes.Eventos
import pi4.main.Classes.Gestor
import pi4.main.Classes.Points
import pi4.main.Classes.StartActivitys
import pi4.main.Object.UserManager
import pi4.main.R

class ActivityEventoDetalhe : AppCompatActivity() {
    private lateinit var eventoId: String
    private lateinit var pontoInteresseId: String
    private lateinit var eventoDetails: Eventos
    private val gestor = Gestor()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_evento_detalhe)
        val id = intent.getStringExtra("eventoId").toString()


        //Ações dos botões
        previous()
        loadEvento(id)
        reservar()

    }

    fun previous() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)
        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }

    fun loadEvento(id:String) {
        val nomeEvento = findViewById<TextView>(R.id.textViewNomeEvento)
        val descricao = findViewById<TextView>(R.id.textViewDescricao)
        val pontos = findViewById<TextView>(R.id.textViewPontos)
        val lugares = findViewById<TextView>(R.id.textViewLugares)

        Req.GET(
            "/evento/${id}",
            JSONObject("""{}"""),
            this,
            UserManager.getUtilizador()!!.getToken(),
            then = { res ->
                val data = res.optJSONArray("data")
                val evento_obj = data.getJSONObject(0)

                nomeEvento.text = evento_obj.optString("nome")
                descricao.text = evento_obj.optString("descricao")
                Points(evento_obj.optInt("pontos"), pontos, this).loadPontosPorExtenso()
                lugares.text = evento_obj.optInt("lotacao").toString() + " pessoas"
            }
        )
    }

    fun reservar() {
        val btnReservar = findViewById<Button>(R.id.btnReserva)

        //Fazer pedido API
        btnReservar.setOnClickListener {
            startActivity(Intent(this, ActivityEventoReserva::class.java)
                .putExtra("eventoId", eventoId)
                .putExtra("pontoInteresseId", pontoInteresseId))
        }
    }

}