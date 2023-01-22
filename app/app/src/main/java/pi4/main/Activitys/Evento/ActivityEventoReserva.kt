package pi4.main.Activitys.Evento

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import com.google.android.material.floatingactionbutton.FloatingActionButton
import pi4.main.Classes.Eventos
import pi4.main.Classes.Gestor
import pi4.main.Classes.Points
import pi4.main.Classes.StartActivitys
import pi4.main.Object.UserManager
import pi4.main.R

class ActivityEventoReserva : AppCompatActivity() {
    private val gestor = Gestor() //O gestor contem as informações do utilizador
    private lateinit var eventoDetails: Eventos
    private lateinit var eventoId: String
    private lateinit var pontoInteresseId: String
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

    private fun loadPoints() {
        val textView = findViewById<TextView>(R.id.scoreUtilizador)

        Points(UserManager.getUtilizador()!!.getPontos().toInt(), textView, this).loadPontos()
    }

    //Vai buscar as informações sobre a reserva do cliente
    fun buttonReservar() {
        val buttonReservar = findViewById<Button>(R.id.buttonReservar)

        buttonReservar.setOnClickListener {
            postReservaAPI()

            startActivity(Intent(this, ActivityReservaEnviada::class.java))
        }
    }

    fun postReservaAPI() {
        val editTextNome = findViewById<EditText>(R.id.editTextTextNome)
        val editTextTelefone = findViewById<EditText>(R.id.editTextTextTelefone)
        val textViewNumeroPessoas = findViewById<TextView>(R.id.textViewNumeroPessoas)

        Log.i("Nome:", editTextNome.text.toString())
        Log.i("Telefone:", editTextTelefone.text.toString())
        Log.i("NumeroPessoas:", textViewNumeroPessoas.text.toString())
    }

    fun numeroPessoas() {
        val buttonMais = findViewById<Button>(R.id.maisButton)
        val buttonMenos = findViewById<Button>(R.id.menosButton)

        buttonMais.setOnClickListener {
            actionButton(1)
        }

        buttonMenos.setOnClickListener {
            actionButton(-1)
        }
    }

    fun actionButton(operation: Int) {
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

    fun verifyNumero(numeroPessoas: Int): Boolean {
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

    fun previous() {
        val floatingButton = findViewById<FloatingActionButton>(R.id.floatingActionButtonReturn)

        StartActivitys(this).floatingPreviousActivity(floatingButton, this)
    }

    fun getIntentExtra() {
        eventoId = intent.getStringExtra("eventoId").toString()
        pontoInteresseId = intent.getStringExtra("pontoInteresseId").toString()
    }

    fun loadEventoAPI() {
        //Load ponto Interesse para atualizar informação
        gestor.getPontoInteresseId(pontoInteresseId, this)

        //Load eventos todos daquele evento (isto ira sair)
        gestor.pontoInteresse.getEventos(pontoInteresseId, this)

        eventoDetails = gestor.pontoInteresse.getDetailsEvento(eventoId)

        numeroMaximoPessoas = eventoDetails.numVagas + 1

        loadInfoEvento()
    }

    fun loadInfoEvento() {
        val nomeEvento = findViewById<TextView>(R.id.textViewEvento)
        val categoria = findViewById<TextView>(R.id.textViewCategoria)
        val morada = findViewById<TextView>(R.id.textViewMorada)

        nomeEvento.text = eventoDetails.nome
        categoria.text = eventoDetails.tipoEvento
        morada.text = eventoDetails.morada
    }
}