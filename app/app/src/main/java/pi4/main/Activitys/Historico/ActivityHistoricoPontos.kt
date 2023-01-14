package pi4.main.Activitys.Historico

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView
import pi4.main.R

class ActivityHistoricoPontos : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_historico_pontos)

        loadPontos()
    }

    fun loadPontos() {
        val pontosPlace = findViewById<TextView>(R.id.textViewPontosUtilizador)

        pontosPlace.text = "998"
    }
}