package pi4.main.Activitys.Historico

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView
import com.google.android.material.floatingactionbutton.FloatingActionButton
import pi4.main.Classes.Gestor
import pi4.main.Classes.StartActivitys
import pi4.main.R

class ActivityInfoHistoricoEvento : AppCompatActivity() {
    private val gestor = Gestor()
    private lateinit var eventoId: String

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
        eventoId = intent.getStringExtra("eventoId").toString()
    }

    fun callEventoDetails() {
        gestor.getUtilizadorAPI()

        for (i in 0..gestor.listaPontosInteresse.size)
            for(j in 0..gestor.listaPontosInteresse[i].listaEventos.size)
                if (gestor.listaPontosInteresse[i].listaEventos[j].id == eventoId) {
                    loadInfo(j)
                }
    }

    fun loadInfo(index: Int) {
        val nome = findViewById<TextView>(R.id.textViewNomeEvento)
        val categoria = findViewById<TextView>(R.id.textViewCategoria)
        val morada = findViewById<TextView>(R.id.textViewMorada)
        val nomeReserva = findViewById<TextView>(R.id.textViewNomeReserva)
        val telefone = findViewById<TextView>(R.id.textViewNumeroTelefone)
        val data = findViewById<TextView>(R.id.textViewData)
        val hora = findViewById<TextView>(R.id.textViewhoras)
        val numeroPessoas = findViewById<TextView>(R.id.textViewLugares)

        nome.text = gestor.utilizador.listaHistoricoReservas[index].nome
        categoria.text = gestor.utilizador.

    }
}