package pi4.main.Activitys.PontoInteresse

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.LinearLayout
import android.widget.ListView
import android.widget.TextView
import com.example.ficha8.Req
import com.google.android.material.floatingactionbutton.FloatingActionButton
import org.json.JSONObject
import pi4.main.Adapter.SetAdapterCardComentarios
import pi4.main.Classes.Comentarios
import pi4.main.Classes.Gestor
import pi4.main.Classes.Points
import pi4.main.Classes.StartActivitys
import pi4.main.Object.UserManager
import pi4.main.R

class ActivityComentarios : AppCompatActivity() {
    private val gestor = Gestor()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_comentarios)

        //id do ponto de interesse
        val id = intent.getStringExtra("pontoInteresseId").toString()

        loadPoints()
        previous()
        getComentarios()
        loadComentarios(id)
    }

    private fun loadPoints() {
        val textView = findViewById<TextView>(R.id.scoreUtilizador)

        Points(UserManager.getUtilizador()!!.getPontos().toInt(), textView, this).loadPontos()
    }

    private fun previous() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }



    private fun getComentarios() {
        //pedido API

        callAdapter()
    }

    fun loadComentarios(id: String) {
        val queryParams = JSONObject()
        val path = "http://192.168.1.254/pi/${id}/comentarios_avaliacoes"

        Req.GET(path,
            queryParams,
            this,
            UserManager.getUtilizador()!!.getToken(),
            then = { res ->
                val listaComentarios:ArrayList<Comentarios> = ArrayList()

                val data = res.optJSONArray("comentarios_avaliacoes")

                for (i in 0..data.length() - 1) {
                    val objectRes = data.optJSONObject(i)

                    listaComentarios.add(
                        Comentarios(
                        objectRes.optString("nome_visitante"),
                        objectRes.optString("comentario"),
                        objectRes.optInt("avaliacao").toString()
                    )
                    )
                }

                val numeroComentarios = findViewById<TextView>(R.id.textViewNumeroComentarios)

                val customAdapter = SetAdapterCardComentarios(this, listaComentarios)
                val linearLayout = findViewById<LinearLayout>(R.id.linearLayoutComentarios)

                numeroComentarios.text = "${res.optInt("count")} comentários"

                for (i in 0..customAdapter.count - 1)
                    linearLayout.addView(customAdapter.getView(i, linearLayout, linearLayout))
            })
    }

    private fun callAdapter(newComment: String) {
        val customAdapter = SetAdapterCardComentarios(this, gestor.pontoInteresse.listaComentarios)
        val listView = findViewById<ListView>(R.id.listViewComentarios)
        gestor.pontoInteresse.listaComentarios.add(newComment)
        customAdapter.notifyDataSetChanged()
        listView.adapter = customAdapter
    }

}
}