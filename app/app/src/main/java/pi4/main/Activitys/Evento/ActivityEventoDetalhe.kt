package pi4.main.Activitys.Evento

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import com.google.android.material.floatingactionbutton.FloatingActionButton
import pi4.main.Classes.Eventos
import pi4.main.Classes.Gestor
import pi4.main.Classes.Points
import pi4.main.Classes.StartActivitys
import pi4.main.R

class ActivityEventoDetalhe : AppCompatActivity() {
    private lateinit var eventoId: String
    private lateinit var pontoInteresseId: String
    private lateinit var eventoDetails: Eventos
    private val gestor = Gestor()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_evento_detalhe)

        //Buscar a informação que vem do intent anterior
        getIntentExtra()

        //Ações dos botões
        previous()
        reservar()

        getDetailsEvento()
    }

    fun previous() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }

    fun reservar() {
        val btnReservar = findViewById<Button>(R.id.btnReserva)

        //Fazer pedido API
        btnReservar.setOnClickListener {
            startActivity(Intent(this, ActivityEventoReserva::class.java)
                .putExtra("evento", eventoDetails as java.io.Serializable))
        }
    }

    fun getIntentExtra() {
        eventoId = intent.getStringExtra("eventoId").toString()
    }

    fun getDetailsEvento() {
        //Load ponto Interesse para atualizar informação
        gestor.getPontoInteresseId("1")

        eventoDetails = gestor.pontoInteresse.getDetailsEvento(eventoId)

        loadInformacao()
    }

    fun loadInformacao() {
        val nomeEvento = findViewById<TextView>(R.id.textViewNomeEvento)
        val descricao = findViewById<TextView>(R.id.textViewDescricao)
        val pontos = findViewById<TextView>(R.id.textViewPontos)
        val data = findViewById<TextView>(R.id.textViewData)
        val horas = findViewById<TextView>(R.id.textViewHoras)
        val lugares = findViewById<TextView>(R.id.textViewLugares)

        nomeEvento.text = eventoDetails.nome
        descricao.text = eventoDetails.descricao
        Points(eventoDetails.numPontos, pontos, this).loadPontosPorExtenso()
        data.text = eventoDetails.data
        horas.text = eventoDetails.numHoras.toString()
        lugares.text = eventoDetails.numVagas.toString()
    }
}