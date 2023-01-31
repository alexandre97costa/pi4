package pi4.main.Activitys.Evento

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.ArrayAdapter
import android.widget.Button
import android.widget.Spinner
import android.widget.TextView
import com.example.ficha8.Req
import com.google.android.material.floatingactionbutton.FloatingActionButton
import org.json.JSONObject
import pi4.main.Classes.*
import pi4.main.Object.UserManager
import pi4.main.R

class ActivityEventoDetalhe : AppCompatActivity() {
    private var eventoId: String = ""
    private lateinit var spinnerDatas: Spinner

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_evento_detalhe)

        val id = intent.getStringExtra("eventoId").toString()

        //Ações dos botões
        previous()
        loadEvento(id)
        reservar()
    }

    private fun previous() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)
        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }

    private fun loadEvento(id:String) {
        val nomeEvento = findViewById<TextView>(R.id.textViewNomeEvento)
        val descricao = findViewById<TextView>(R.id.textViewDescricao)
        val pontos = findViewById<TextView>(R.id.textViewPontos)
        val lugares = findViewById<TextView>(R.id.textViewLugares)
        spinnerDatas = findViewById<Spinner>(R.id.spinnerData)

        Req.GET(
            "/evento/${id}",
            JSONObject("""{}"""),
            this,
            UserManager.getUtilizador()!!.getToken(),
            then = { res ->
                val data = res.optJSONArray("data")
                val evento_obj = data.getJSONObject(0)
                val listaDatas:ArrayList<String> = ArrayList()

                eventoId = evento_obj.optInt("id").toString()

                nomeEvento.text = evento_obj.optString("nome")
                descricao.text = evento_obj.optString("descricao")
                Points(evento_obj.optInt("pontos"), pontos, this).loadPontosPorExtenso()
                lugares.text = evento_obj.optInt("lotacao").toString() + " pessoas"

                if(evento_obj.optJSONArray("sessoes").length() > 0) {
                    for (i in 0..evento_obj.optJSONArray("sessoes").length() - 1) {
                        val primeiraParte = evento_obj.optJSONArray("sessoes").optJSONObject(i).optString("data_hora").split("T")[1]
                        val hora = primeiraParte.split(":")[0]
                        val minutos = primeiraParte.split(":")[1]

                        val final = "${evento_obj.optJSONArray("sessoes").optJSONObject(i).optString("data_hora").split("T")[0]} ás ${hora}h${minutos}"
                        listaDatas.add(final)
                    }

                    val simpleAdapterDatas = ArrayAdapter(this, android.R.layout.simple_spinner_item, listaDatas)
                    simpleAdapterDatas.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item)

                    spinnerDatas.adapter = simpleAdapterDatas
                }
            }
        )
    }

    private fun reservar() {
        val btnReservar = findViewById<Button>(R.id.btnReserva)

        //Fazer pedido API
        btnReservar.setOnClickListener {
            Log.i("Spinner", spinnerDatas.selectedItem.toString())

            startActivity(Intent(this, ActivityEventoReserva::class.java)
                .putExtra("eventoId", eventoId))
        }
    }

}