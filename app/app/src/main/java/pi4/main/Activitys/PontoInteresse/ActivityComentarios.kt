package pi4.main.Activitys.PontoInteresse

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ListView
import android.widget.TextView
import pi4.main.Adapter.SetAdapterCardComentarios
import pi4.main.Classes.Points
import pi4.main.Classes.PontoInteresse
import pi4.main.Classes.Utilizador
import pi4.main.R

class ActivityComentarios : AppCompatActivity() {
    var pontoInteresseId: String = ""

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
        setContentView(R.layout.activity_comentarios)

        loadPoints()
        pontoInteresseId = intentGet()
        getComentarios()
    }

    private fun loadPoints() {
        val textView = findViewById<TextView>(R.id.scoreUtilizador)

        Points(Utilizador().pontos.toInt(), textView, this).loadPontos()
    }


    fun intentGet(): String {
        return intent.getStringExtra("pontoInteresseId").toString()
    }

    fun getComentarios() {
        //pedido API
        pontoInteresse.loadComentarios(pontoInteresseId)
        callAdapter()
    }

    fun callAdapter() {
        val customAdapter = SetAdapterCardComentarios(this, pontoInteresse.listaComentarios)
        val listView = findViewById<ListView>(R.id.listViewComentarios)
        listView.adapter = customAdapter
    }
}