package pi4.main.Activitys.PontoInteresse

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView
import androidx.cardview.widget.CardView
import pi4.main.Activitys.Evento.ActivityEventoDetalhe
import pi4.main.Classes.Points
import pi4.main.R

class ActivityPontoInteresseDetalhe : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_ponto_interesse_detalhe)

        loadPoints()
        recital()
    }

    private fun loadPoints() {
        val textView = findViewById<TextView>(R.id.scoreUtilizador)

        val pontos = Points(998, textView, this)

        pontos.loadPontos()
    }

    fun recital() {
        val recital = findViewById<CardView>(R.id.cardEvento)

        recital.setOnClickListener{
            startActivity(Intent(this, ActivityEventoDetalhe::class.java))
        }
    }
}