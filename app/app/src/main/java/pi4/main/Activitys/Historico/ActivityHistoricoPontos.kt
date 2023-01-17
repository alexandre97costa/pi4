package pi4.main.Activitys.Historico

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView
import com.google.android.material.floatingactionbutton.FloatingActionButton
import pi4.main.Classes.StartActivitys
import pi4.main.Classes.Utilizador
import pi4.main.R

class ActivityHistoricoPontos : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_historico_pontos)

        loadPontos()
        previous()
    }

    fun loadPontos() {
        val pontosPlace = findViewById<TextView>(R.id.textViewPontosUtilizador)

        pontosPlace.text = Utilizador().pontos
    }

    fun previous() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }
}