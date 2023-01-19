package pi4.main.Activitys.Historico

import SetAdapterCardHistoricoPontos
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ListView
import android.widget.TextView
import com.google.android.material.floatingactionbutton.FloatingActionButton
import pi4.main.Adapter.SetAdapterCardRecompensa
import pi4.main.Classes.StartActivitys
import pi4.main.Classes.Utilizador
import pi4.main.R

class ActivityHistoricoPontos : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_historico_pontos)

        loadPontos()
        previous()
        loadHistoricoPontos()
    }

    fun loadPontos() {
        val pontosPlace = findViewById<TextView>(R.id.textViewPontosUtilizador)

        pontosPlace.text = Utilizador().pontos
    }

    fun previous() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }

    fun loadHistoricoPontos() {
        val customAdapter = SetAdapterCardHistoricoPontos(this, Utilizador().listaHistoricoPontos)
        val listView = findViewById<ListView>(R.id.listViewHistoricoPontos)
        listView.adapter = customAdapter
    }
}