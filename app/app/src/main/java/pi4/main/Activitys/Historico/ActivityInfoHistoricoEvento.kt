package pi4.main.Activitys.Historico

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ImageView
import android.widget.TextView
import androidx.core.content.ContextCompat
import com.google.android.material.floatingactionbutton.FloatingActionButton
import pi4.main.Classes.Gestor
import pi4.main.Classes.StartActivitys
import pi4.main.Object.UserManager
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
        gestor.getAllPontosInteresse(this)
        UserManager.getUtilizador()!!.getHistocoReservas(this)

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

        if(UserManager.getUtilizador()!!.getReservaDetails(eventoId).getEstado() == "valido") {
            estado.text = "Validado"
            estado.setTextColor(ContextCompat.getColor(this, R.color.greenPrincipal))
            iconEstado.setImageResource(R.drawable.verified_40px)
            iconEstado.setColorFilter(ContextCompat.getColor(this,R.color.greenPrincipal))
        }

        nomeEvento.text = UserManager.getUtilizador()!!.getReservaDetails(eventoId).getEvento().nome
        //categoria.text = gestor.utilizador.getReservaDetails(eventoId).get
        morada.text = UserManager.getUtilizador()!!.getReservaDetails(eventoId).getEvento().morada
        nomeReserva.text = UserManager.getUtilizador()!!.getReservaDetails(eventoId).getNome()
        telefone.text = UserManager.getUtilizador()!!.getReservaDetails(eventoId).getTelefone()
        data.text = UserManager.getUtilizador()!!.getReservaDetails(eventoId).getEvento().data
        hora.text = UserManager.getUtilizador()!!.getReservaDetails(eventoId).getEvento().numHoras.toString()
        numeroPessoas.text = UserManager.getUtilizador()!!.getReservaDetails(eventoId).getNumeroPessoas()
    }
}