package pi4.main.Activitys.PontoInteresse

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView
import androidx.cardview.widget.CardView
import com.google.android.material.floatingactionbutton.FloatingActionButton
import pi4.main.Activitys.Evento.ActivityEventoDetalhe
import pi4.main.Classes.Points
import pi4.main.Classes.StartActivitys
import pi4.main.R

class ActivityPontoInteresseDetalhe : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_ponto_interesse_detalhe)

        loadPoints()
        recital()
        maisComentarios()
        previous()
    }

    private fun loadPoints() {
        val textView = findViewById<TextView>(R.id.scoreUtilizador)

        val pontos = Points(10, textView, this)

        pontos.loadPontosPontoInteresse()
    }

    fun recital() {
        val cardRecital = findViewById<CardView>(R.id.cardEvento)

        StartActivitys(this).cardGoTo(cardRecital, ActivityEventoDetalhe())
    }

    fun maisComentarios() {
        val verMais = findViewById<TextView>(R.id.textViewVerMaisComentarios)

        StartActivitys(this).textViewGoTo(verMais, ActivityComentarios())
    }

    fun previous() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }
}