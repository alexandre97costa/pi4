package pi4.main.Activitys.PontoInteresse

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.LinearLayout
import android.widget.TextView
import com.google.android.material.floatingactionbutton.FloatingActionButton
import com.google.android.material.tabs.TabLayout
import pi4.main.Adapter.SetAdapterCardComentarios
import pi4.main.Adapter.SetAdapterCardEvento
import pi4.main.Classes.Gestor
import pi4.main.Classes.Points
import pi4.main.Classes.StartActivitys
import pi4.main.R

class ActivityPontoInteresseDetalhe : AppCompatActivity() {
    private val gestor = Gestor()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_ponto_interesse_detalhe)

        //Get Info Ponto interesse
        getExtraIntent()

        //Function de botões
        previous()
        maisComentarios()

        //Carregar o valor dos pontos de interesse
        loadPointsPontoInteresse()

        //Carregar informação do ponto de interesse
        loadComentarios()
        loadEventos()
    }

    fun getExtraIntent() {
        val id = intent.getStringExtra("pontoInteresseId").toString()

        gestor.getPontoInteresseId(id)
    }

    fun previous() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }

    fun loadPointsPontoInteresse() {
        //Quantos pontos o utilizador ganha naquele sitio
        val textView = findViewById<TextView>(R.id.scoreUtilizador)

        val pontos = Points(gestor.pontoInteresse.getNumPontos().toInt(), textView, this)

        pontos.loadPontosPontoInteresse()
    }

    fun maisComentarios() {
        val verMais = findViewById<TextView>(R.id.textViewVerMaisComentarios)

        verMais.setOnClickListener{
            startActivity(Intent(this, ActivityComentarios::class.java)
                .putExtra("pontoInteresseId", gestor.pontoInteresse.getId()))
        }
    }

    fun loadComentarios() {
        gestor.pontoInteresse.getLimitComentarios(gestor.pontoInteresse.getId())

        callAdatperComentario()
    }

    fun callAdatperComentario() {
        //Mandamos aqui a lista de comentarios <pontoInteresse.listaComentarios>
        val customAdapter = SetAdapterCardComentarios(this, gestor.pontoInteresse.listaComentarios)
        val linearLayout = findViewById<LinearLayout>(R.id.linearLayoutComentarios)

        for (i in 0..customAdapter.count - 1)
            linearLayout.addView(customAdapter.getView(i, linearLayout, linearLayout))
    }

    fun loadEventos() {
        gestor.pontoInteresse.getEventos(gestor.pontoInteresse.getId())

        callAdapterEvento()
    }

    fun callAdapterEvento() {
        //Mandamos aqui a lista de comentarios <pontoInteresse.listaEventos>
        val customAdapter = SetAdapterCardEvento(this, gestor.pontoInteresse.listaEventos)
        val tabLayout = findViewById<TabLayout>(R.id.tabLayoutEventos)

        for (i in 0..customAdapter.count - 1)
            tabLayout.addTab(tabLayout.newTab().setCustomView(customAdapter.getView(i, tabLayout, tabLayout)))
    }
}