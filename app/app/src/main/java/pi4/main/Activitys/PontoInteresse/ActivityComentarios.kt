package pi4.main.Activitys.PontoInteresse

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ListView
import android.widget.TextView
import pi4.main.Adapter.SetAdapterCardComentarios
import pi4.main.Classes.Gestor
import pi4.main.Classes.Points
import pi4.main.R

class ActivityComentarios : AppCompatActivity() {
    private val gestor = Gestor()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_comentarios)

        intentPutExtra()
        loadPoints()

        getComentarios()
    }

    private fun loadPoints() {
        val textView = findViewById<TextView>(R.id.scoreUtilizador)

        Points(gestor.utilizador.getPontos().toInt(), textView, this).loadPontos()
    }


    fun intentPutExtra() {
        val id = intent.getStringExtra("pontoInteresseId").toString()

        gestor.getPontoInteresseId(id)
    }

    fun getComentarios() {
        //pedido API
        gestor.pontoInteresse.getAllComentarios(gestor.pontoInteresse.getId())

        callAdapter()
    }

    fun callAdapter() {
        val customAdapter = SetAdapterCardComentarios(this, gestor.pontoInteresse.listaComentarios)
        val listView = findViewById<ListView>(R.id.listViewComentarios)
        listView.adapter = customAdapter
    }
}