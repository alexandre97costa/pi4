package pi4.main.Activitys.Historico

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ImageView
import android.widget.TextView
import com.google.android.material.floatingactionbutton.FloatingActionButton
import pi4.main.Classes.Gestor
import pi4.main.Classes.StartActivitys
import pi4.main.R

class ActivityInfoHistoricoEvento : AppCompatActivity() {
    private val gestor = Gestor()
    private lateinit var eventoId: String
    private lateinit var pontoInteresseId: String

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_info_historico_evento)

        previous()
        getPutExtra()
        callEventoDetails()
    }

    fun previous() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }

    fun getPutExtra() {
        pontoInteresseId = intent.getStringExtra("pontoInteresseId").toString()
        eventoId = intent.getStringExtra("reservaId").toString()
    }

    fun callEventoDetails() {
        gestor.getUtilizadorAPI()
        gestor.utilizador.getHistocoReservas(gestor.utilizador.getId())

        loadInfo()
    }

    fun loadInfo() {
        val nomeEvento = findViewById<TextView>(R.id.textViewNomeEvento)
        val categoria = findViewById<TextView>(R.id.textViewCategoria)
        val morada = findViewById<TextView>(R.id.textViewMorada)
        val nomeReserva = findViewById<TextView>(R.id.textViewNomeReserva)
        val telefone = findViewById<TextView>(R.id.textViewNumeroTelefone)
        val data = findViewById<TextView>(R.id.textViewData)
        val hora = findViewById<TextView>(R.id.textViewhoras)
        val numeroPessoas = findViewById<TextView>(R.id.textViewLugares)

        val estado = findViewById<TextView>(R.id.textViewEstado)
        val iconEstado = findViewById<ImageView>(R.id.imageViewIconEstado)

        if(gestor.utilizador.getReservaDetails(eventoId).getEstado() == "valido") {
            estado.text = "Valido"
            estado.setTextColor(R.color.greenPrincipal.toInt())
            iconEstado.setImageResource(R.drawable.verified_40px)
        }

        nomeEvento.text = gestor.utilizador.getReservaDetails(eventoId).getEvento().nome
        //categoria.text = gestor.utilizador.
        morada.text = gestor.utilizador.getReservaDetails(eventoId).getEvento().morada
        nomeReserva.text = gestor.utilizador.getReservaDetails(eventoId).getNome()
        telefone.text = gestor.utilizador.getReservaDetails(eventoId).getTelefone()
        data.text = gestor.utilizador.getReservaDetails(eventoId).getEvento().data
        hora.text = gestor.utilizador.getReservaDetails(eventoId).getEvento().numHoras.toString()
        numeroPessoas.text = gestor.utilizador.getReservaDetails(eventoId).getNumeroPessoas()
    }
}