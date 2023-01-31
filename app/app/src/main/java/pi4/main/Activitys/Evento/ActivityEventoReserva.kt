package pi4.main.Activitys.Evento

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import com.example.ficha8.Req
import com.google.android.material.floatingactionbutton.FloatingActionButton
import org.json.JSONObject
import pi4.main.Classes.Eventos
import pi4.main.Classes.Gestor
import pi4.main.Classes.Points
import pi4.main.Classes.StartActivitys
import pi4.main.Object.UserManager
import pi4.main.R

class ActivityEventoReserva : AppCompatActivity() {
    private lateinit var eventoId: String
    private lateinit var sessaoId: String
    private var numeroMaximoPessoas: Int? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_evento_reserva)

        getIntentExtra()
        loadEventoAPI()

        //+1 devido a margem de erro de 1
        numeroPessoas()

        //Function buttons
        loadPoints()
        buttonReservar()
        previous()
    }

    private fun getIntentExtra() {
        eventoId = intent.getStringExtra("eventoId").toString()
        sessaoId = intent.getStringExtra("sessaoId").toString()
    }

    private fun loadEventoAPI() {
        Req.GET(
            "/evento/${eventoId}",
            JSONObject("""{}"""),
            this,
            UserManager.getUtilizador()!!.getToken(),
            then = { res ->

                val data = res.optJSONArray("data")
                val sessoes = data.optJSONObject(0).optJSONArray("sessoes")

                for (i in 0..sessoes.length() - 1)
                    if(sessoes.optJSONObject(i).optInt("id").toString() == sessaoId)
                        numeroMaximoPessoas = sessoes.optJSONObject(i).optInt("vagas") + 1
                //numeroMaximoPessoas = eventoDetails.numVagas + 1


                val nomeEvento = findViewById<TextView>(R.id.textViewEvento)
                val categoria = findViewById<TextView>(R.id.textViewCategoria)
                val morada = findViewById<TextView>(R.id.textViewMorada)

                nomeEvento.text = data.optJSONObject(0).optString("nome")
                categoria.text = data.optJSONObject(0).optJSONObject("tipo_evento").optString("nome")
                morada.text = data.optJSONObject(0).optJSONObject("ponto_interesse").optString("morada")
            }
        )
    }

    private fun numeroPessoas() {
        val buttonMais = findViewById<Button>(R.id.maisButton)
        val buttonMenos = findViewById<Button>(R.id.menosButton)

        buttonMais.setOnClickListener {
            actionButton(1)
        }

        buttonMenos.setOnClickListener {
            actionButton(-1)
        }
    }

    private fun actionButton(operation: Int) {
        val textViewNumeroPessoas = findViewById<TextView>(R.id.textViewNumeroPessoas)
        var numeroPessoas = textViewNumeroPessoas.text.toString().toInt()
        Log.i("Inicio numeroPessoas: ", numeroPessoas.toString())

        if(operation == 1) {
            numeroPessoas = numeroPessoas + 1
            Log.i("Add numeroPessoas: ", numeroPessoas.toString())
        } else {
            numeroPessoas = numeroPessoas - 1
            Log.i("Menos numeroPessoas: ", numeroPessoas.toString())
        }

        if(verifyNumero(numeroPessoas) == true)
            textViewNumeroPessoas.text = numeroPessoas.toString()
    }

    private fun verifyNumero(numeroPessoas: Int): Boolean {
        //0 devido a margem de erro
        if(numeroPessoas == 0) {
            Toast.makeText(this, "Número minimo de pessoas atingido", Toast.LENGTH_SHORT).show()
            return false
        }

        if(numeroPessoas == numeroMaximoPessoas) {
            Toast.makeText(this, "Número máximo de pessoas atingido", Toast.LENGTH_SHORT).show()
            return false
        }

        return true
    }

    private fun loadPoints() {
        val textView = findViewById<TextView>(R.id.scoreUtilizador)

        Points(UserManager.getUtilizador()!!.getPontos().toInt(), textView, this).loadPontos()
    }

    private fun buttonReservar() {
        val buttonReservar = findViewById<Button>(R.id.buttonReservar)

        buttonReservar.setOnClickListener {
            postReservaAPI()

            //startActivity(Intent(this, ActivityReservaEnviada::class.java))
        }
    }

    private fun postReservaAPI() {
        val editTextNome = findViewById<EditText>(R.id.editTextTextNome)
        val textViewNumeroPessoas = findViewById<TextView>(R.id.textViewNumeroPessoas)

        Log.i("Nome:", editTextNome.text.toString())
        Log.i("NumeroPessoas:", textViewNumeroPessoas.text.toString())

        val queryParams = JSONObject("""{}""")
        val requestBody = JSONObject()
        requestBody.put("nome", editTextNome.text.toString())
        requestBody.put("pessoas", textViewNumeroPessoas.text.toString())
        requestBody.put("visitante_id", UserManager.getUtilizador()!!.getId())
        requestBody.put("sessao_id", sessaoId)
        requestBody.put("observacoes", "")

        Req.POST(
            "/reserva",
            queryParams,
            requestBody,
            this,
            UserManager.getUtilizador()!!.getToken(),
            then = { res ->
                startActivity(Intent(this, ActivityReservaEnviada::class.java))
            }
        )
    }

    private fun previous() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }
}