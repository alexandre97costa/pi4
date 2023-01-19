package pi4.main.Activitys.PontoInteresse

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.LinearLayout
import android.widget.ListView
import android.widget.TextView
import androidx.cardview.widget.CardView
import androidx.core.view.marginEnd
import androidx.recyclerview.widget.RecyclerView
import com.google.android.material.floatingactionbutton.FloatingActionButton
import pi4.main.Activitys.Evento.ActivityEventoDetalhe
import pi4.main.Adapter.SetAdapterCardComentarios
import pi4.main.Adapter.SetAdapterCardEvento
import pi4.main.Adapter.SetAdapterCardRecompensa
import pi4.main.Classes.Points
import pi4.main.Classes.PontoInteresse
import pi4.main.Classes.StartActivitys
import pi4.main.R

class ActivityPontoInteresseDetalhe : AppCompatActivity() {
    val pontoInteresse = PontoInteresse(
        "",
        "Jardim das mães",
        "jardim da cidade",
        "Um jardim muito bonito",
        "Jardim",
        "Viseu",
        "17",
        4.7f,
        12,
        "Joaquim",
    )

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_ponto_interesse_detalhe)

        loadPoints()
        maisComentarios()
        loadComentarios()
        loadEventos()
        previous()
    }

    private fun loadPoints() {
        val textView = findViewById<TextView>(R.id.scoreUtilizador)

        val pontos = Points(10, textView, this)

        pontos.loadPontosPontoInteresse()
    }


    fun maisComentarios() {
        val verMais = findViewById<TextView>(R.id.textViewVerMaisComentarios)

        StartActivitys(this).textViewGoTo(verMais, ActivityComentarios())
    }

    fun previous() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }

    fun loadComentarios() {
        pontoInteresse.loadComentarios("1")

        callAdatperComentario()
    }

    fun callAdatperComentario() {
        val customAdapter = SetAdapterCardComentarios(this, pontoInteresse.listaComentarios)
        val linearLayout = findViewById<LinearLayout>(R.id.linearLayoutComentarios)
        //linearLayout.adapter = customAdapter
    }

    fun loadEventos() {
        pontoInteresse.loadEventos("1")

        callAdapterEvento()
    }

    fun callAdapterEvento() {
        val customAdapter = SetAdapterCardEvento(this, pontoInteresse.listaEventos)
        val linearLayout = findViewById<LinearLayout>(R.id.linearLayoutEventos)

        linearLayout.addView(customAdapter.getView(0, linearLayout, linearLayout))
        linearLayout.addView(customAdapter.getView(1, linearLayout, linearLayout))
    }
}