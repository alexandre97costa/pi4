package pi4.main.Activitys.PontoInteresse

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.EditText
import android.widget.ListView
import android.widget.RatingBar
import android.widget.TextView
import android.widget.Toast
import com.example.ficha8.Req
import com.google.android.material.floatingactionbutton.FloatingActionButton
import org.json.JSONObject
import pi4.main.Adapter.SetAdapterCardComentarios
import pi4.main.Classes.Comentarios
import pi4.main.Classes.Points
import pi4.main.Classes.StartActivitys
import pi4.main.Object.UserManager
import pi4.main.R

class ActivityComentarios : AppCompatActivity() {
    private var id: String = ""

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_comentarios)

        //id do ponto de interesse
        this.id = intent.getStringExtra("pontoInteresseId").toString()

        loadPoints()
        previous()
        loadComentarios()
        postComentario()
    }

    private fun loadPoints() {
        val textView = findViewById<TextView>(R.id.scoreUtilizador)

        Points(UserManager.getUtilizador()!!.getPontos().toInt(), textView, this).loadPontos()
    }

    private fun previous() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }

    private fun loadComentarios() {
        val queryParams = JSONObject("""{}""")
        val path = "/pi/${id}/comentarios_avaliacoes"

        Req.GET(path,
            queryParams,
            this,
            UserManager.getUtilizador()!!.getToken(),
            then = { res ->
                val listaComentarios:ArrayList<Comentarios> = ArrayList()

                val data = res.optJSONArray("comentarios_avaliacoes")

                for (i in 0..data.length() - 1) {
                    val objectRes = data.optJSONObject(i)

                    listaComentarios.add(Comentarios(
                        objectRes.optString("nome_visitante"),
                        objectRes.optString("comentario"),
                        objectRes.optInt("avaliacao").toString()
                    ))
                }

                val numeroComentarios = findViewById<TextView>(R.id.textViewNumeroComentarios)
                numeroComentarios.text = "${res.optInt("count")} comentários"

                val customAdapter = SetAdapterCardComentarios(this, listaComentarios)
                val listView = findViewById<ListView>(R.id.listViewComentarios)
                listView.adapter = customAdapter

            })
    }

    private fun postComentario() {
        val rating = findViewById<RatingBar>(R.id.ratingBar)
        val editText = findViewById<EditText>(R.id.editTextComentario)

        val btnPublicar = findViewById<Button>(R.id.buttonPublicar)

        btnPublicar.setOnClickListener {
            if (editText.text.toString() == "")
                return@setOnClickListener Toast.makeText(this, "Necissta de introduzir texto no seu comentario", Toast.LENGTH_SHORT).show()

            Log.i("rating", rating.rating.toString())
            Log.i("comentario", editText.text.toString())

            val queryParams = JSONObject("""{}""")
            val bodyRequest = JSONObject("""{}""")
            bodyRequest.put("avaliacao", rating.rating.toInt())
            bodyRequest.put("comentario", editText.text.toString())

            val path = "/pi/${id}/comentario_avaliacao"

            Req.POST(path, queryParams, bodyRequest, this, UserManager.getUtilizador()!!.getToken(), then = { res ->
                Toast.makeText(this, "Comentario enviado com sucesso", Toast.LENGTH_SHORT).show()
                loadComentarios()
            })
        }
    }
}